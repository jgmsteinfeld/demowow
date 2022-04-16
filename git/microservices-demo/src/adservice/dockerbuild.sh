#!/bin/sh
docker build -t demowow/adservice:v1.0 .
docker push demowow/adservice:v1.0
