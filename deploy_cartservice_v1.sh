#/bin/bash

kubectl -n boutique delete deployment cartservicev2

sleep 2

kubectl -n boutique apply -f /home/ec2-user/git/microservices-demo/canary/cartservice_deployment_v1.yaml
