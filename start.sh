#!/bin/bash

node server/index.js &
BACKEND_PID=$!

sleep 2

npm run dev &
FRONTEND_PID=$!

wait -n

exit $?
