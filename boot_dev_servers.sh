#!/bin/bash

if [ -f /.dockerenv ]; then
  cd /app/frontend/
  ./serve.sh &
else
    echo "Usage: run this script inside the dev environment Docker container";
fi
