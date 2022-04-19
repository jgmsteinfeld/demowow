#!/bin/sh
docker build -t demowow/paymentservice:v1.0 .
docker push demowow/paymentservice:v1.0
