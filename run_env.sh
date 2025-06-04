#!/bin/bash

docker run -it --rm -p 4200:4200 -p 3000:3000 -v $PWD:/app jukbx-env bash
