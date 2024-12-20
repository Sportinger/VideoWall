# Flask React Video Wall 🎥

A modern web application built with Flask backend and React frontend.

## 🚀 Features

- Modern React frontend with a clean UI
- Flask backend with RESTful API
- Cross-Origin Resource Sharing (CORS) enabled
- Real-time communication between frontend and backend

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Python 3.7+
- Node.js and npm (Node Package Manager)

## 🛠️ Installation

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Create a virtual environment (recommended):
   ```bash
   python -m venv venv
   ```

3. Activate the virtual environment:
   - Windows:
     ```bash
     venv\Scripts\activate
     ```
   - Unix or MacOS:
     ```bash
     source venv/bin/activate
     ```

4. Install Python dependencies:
   ```bash
   pip install -r requirements.txt
   ```

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install Node.js dependencies:
   ```bash
   npm install
   ```

## 🚀 Running the Application

### Start the Backend

1. From the backend directory:
   ```bash
   python run.py
   ```
   The backend will start on http://localhost:5000

### Start the Frontend

1. From the frontend directory:
   ```bash
   npm start
   ```
   The frontend will start on http://localhost:3000

## 🏗️ Project Structure

```
video-wall/
├── backend/
│   ├── app/
│   │   └── __init__.py
│   ├── requirements.txt
│   └── run.py
└── frontend/
    ├── public/
    │   └── index.html
    ├── src/
    │   ├── App.js
    │   └── index.js
    └── package.json
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details. 