#!/bin/sh
docker build -t demowow/emailservice:v1.0 .
docker push demowow/emailservice:v1.0
