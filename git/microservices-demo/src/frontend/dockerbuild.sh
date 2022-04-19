#!/bin/sh
docker build -t demowow/frontend:v1.0 .
docker push demowow/frontend:v1.0
