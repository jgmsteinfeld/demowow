#!/bin/sh
docker build -t demowow/currencyservice:v1.0 .
docker push demowow/currencyservice:v1.0
