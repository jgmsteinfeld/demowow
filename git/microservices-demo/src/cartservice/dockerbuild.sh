#!/bin/sh
docker build -t demowow/cartservice:v1.0 .
docker push demowow/cartservice:v1.0
