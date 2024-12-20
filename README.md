# VideoWall

A web application with a React frontend and Flask backend.

## Prerequisites

- Python 3.x
- Node.js and npm

## Setup

### Backend Setup
```bash
cd backend
pip install -r requirements.txt
```

### Frontend Setup
```bash
cd frontend
npm install
```

## Running the Application

There are two ways to run the application:

### Option 1: Run Everything with Python (Recommended)
From the backend directory:
```bash
python run.py
```
This will start both the frontend and backend servers automatically.

### Option 2: Run Servers Separately
If you prefer to run the servers separately:

Backend:
```bash
cd backend
python run.py
```

Frontend:
```bash
cd frontend
npm start
```

## Access the Application
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000

## Development
- Frontend React code is in the `frontend/src` directory
- Backend Flask code is in the `backend/app` directory 