#!/bin/sh
docker build -t demowow/productcatalogservice:v1.0 .
docker push demowow/productcatalogservice:v1.0
