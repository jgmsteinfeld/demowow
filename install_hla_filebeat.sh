#/bin/bash
kubectl apply -f ./git/hla/filebeat_manifest.yml

kubectl apply -f ./git/hla/filebeat_docker_configmap.yml

kubectl apply -f ./git/hla/filebeat_daemonset.yml
