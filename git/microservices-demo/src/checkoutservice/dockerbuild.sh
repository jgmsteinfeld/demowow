#!/bin/sh
docker build -t demowow/checkoutservice:v1.0 .
docker push demowow/checkoutservice:v1.0
