import subprocess
import os
import sys
from app import create_app
import threading

def run_frontend():
    frontend_path = os.path.join(os.path.dirname(os.path.dirname(__file__)), 'frontend')
    if sys.platform == 'win32':
        subprocess.run('npm start', shell=True, cwd=frontend_path)
    else:
        subprocess.run(['npm', 'start'], cwd=frontend_path)

def run_backend():
    app = create_app()
    app.run(debug=True)

if __name__ == '__main__':
    # Start frontend in a separate thread
    frontend_thread = threading.Thread(target=run_frontend)
    frontend_thread.daemon = True
    frontend_thread.start()
    
    # Run backend in main thread
    run_backend() 