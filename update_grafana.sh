#/bin/bash

# Remove old dashboards & directories
rm -rf git/dashboards
rm -rf novatec-sdg-panel


#Get latest Servicenow-Optimiz dashboards for Grafana
wget -O sn-grafana.zip https://github.com/optimizca/servicenow-grafana/archive/refs/heads/main.zip
unzip sn-grafana.zip 
rm -f sn-grafana.zip 
rm -rf git/servicenow-optimiz-plugin/*
mv -f servicenow-grafana-main/dist/* git/servicenow-optimiz-plugin
rm -rf servicenow-grafana-main 

# Get the latest Grafana.yaml file - Shouldn't need to do this going forward
wget -O grafana.yaml https://gist.githubusercontent.com/R2DToo/d9de540d6b77d5374c72a88d32565565/raw/ee38a1803b1a77a4ff8c2647f8b6cc3b82a149a5/grafana.yaml
mv grafana.yaml git/istio-1.11.2/samples/addons

#Install Grafana dashboard to view Prometheus metrics
kubectl delete -f /home/ec2-user/git/istio-1.11.2/samples/addons/grafana.yaml

sleep 10

#Install Grafana dashboard to view Prometheus metrics
kubectl apply -f /home/ec2-user/git/istio-1.11.2/samples/addons/grafana.yaml
