import subprocess
import os
import sys
import signal
import threading
import psutil
from app import create_app

def kill_process_tree(pid):
    try:
        parent = psutil.Process(pid)
        children = parent.children(recursive=True)
        for child in children:
            child.terminate()
        parent.terminate()
    except psutil.NoSuchProcess:
        pass

def run_frontend():
    frontend_path = os.path.join(os.path.dirname(os.path.dirname(__file__)), 'frontend')
    if sys.platform == 'win32':
        return subprocess.Popen('npm start', shell=True, cwd=frontend_path)
    else:
        return subprocess.Popen(['npm', 'start'], cwd=frontend_path)

def run_backend(shutdown_event):
    app = create_app()
    server = threading.Thread(target=lambda: app.run(debug=True, use_reloader=False))
    server.daemon = True
    server.start()
    
    # Wait for shutdown signal
    shutdown_event.wait()
    # Cleanup will be handled by the main thread

def signal_handler(signum, frame):
    print("\nReceived shutdown signal. Cleaning up...")
    shutdown_event.set()

if __name__ == '__main__':
    shutdown_event = threading.Event()
    
    # Set up signal handlers
    signal.signal(signal.SIGINT, signal_handler)
    signal.signal(signal.SIGTERM, signal_handler)
    
    # Start frontend process
    frontend_process = run_frontend()
    
    try:
        # Run backend in a separate thread
        backend_thread = threading.Thread(target=lambda: run_backend(shutdown_event))
        backend_thread.daemon = True
        backend_thread.start()
        
        # Wait for shutdown signal
        while not shutdown_event.is_set():
            shutdown_event.wait(1)
            
    except Exception as e:
        print(f"Error occurred: {e}")
    finally:
        print("Shutting down servers...")
        # Kill frontend process and its children
        if frontend_process:
            kill_process_tree(frontend_process.pid)
        # Backend will be automatically terminated as it's running in daemon threads
        print("Servers shut down successfully.") 