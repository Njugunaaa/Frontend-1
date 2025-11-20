#!/bin/bash

# Start Flask backend on port 8000
cd backend
python app.py &
BACKEND_PID=$!

# Wait for backend to start
sleep 3

# Start Vite frontend on port 5000
cd ..
npm run dev &
FRONTEND_PID=$!

# Wait for any process to exit
wait -n

# Exit with status of process that exited first
exit $?
