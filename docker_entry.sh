#!/bin/bash

cd /app/frontend
echo "npm install"
npm install

cd /app

./boot_dev_servers.sh

bash
