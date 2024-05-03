#!/bin/bash

docker run -it -v ~/.aws:/root/.aws -v $PWD:/app kevin-ruby bash
