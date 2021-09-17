#/bin/bash

#Check if travelapp is already installed
var=`kubectl get namespace | grep travel`
if [ "${var}" != "" ] ; then
    echo "TravelApp is already installed, Exiting"
    exit
fi

#Start Install Travel App 
cd /home/ec2-user/git/travelapp

# Create travel namespaces in Kubernetes
kubectl create namespace travel-agency
kubectl create namespace travel-portal
kubectl create namespace travel-control

#Enable Istio Injection for travel namespaces
kubectl label namespace travel-agency istio-injection=enabled
kubectl label namespace travel-portal istio-injection=enabled
kubectl label namespace travel-control istio-injection=enabled


# Install Travel App 
kubectl apply -f /home/ec2-user/git/travelapp/travel_agency.yaml -n travel-agency
sleep 2
kubectl apply -f /home/ec2-user/git/travelapp/travel_portal.yaml -n travel-portal
sleep 2
kubectl apply -f /home/ec2-user/git/travelapp/travel_control.yaml -n travel-control

sleep 5

# Make Travel App available externally
kubectl -n travel-control patch svc control -p '{"spec": {"type": "LoadBalancer"}}'

#Create Tunnel to allow app to be available externally
nohup minikube tunnel &> /dev/null &

# Record Public URL and Private URL for application in robotshopaccess file
port=`kubectl -n travel-control get svc | grep LoadBalancer | cut -d ':' -f2 | cut -d '/' -f1`
# Get IstioGtway port information
IstioGtwyPort=`kubectl -n istio-system get service istio-ingressgateway -o jsonpath='{.spec.ports[?(@.name=="http2")].nodePort}'`

#Get Public IP
pubip=`curl -s v4.ident.me`
pubhostname=`curl -s http://169.254.169.254/latest/meta-data/public-hostname`

#Record Ports in travelappccess file
echo "" > /home/ec2-user/travelappaccess
echo "Travel Application Access Information: --------------------" >> /home/ec2-user/travelappaccess
echo "Travel App PublicIP URL: http://${pubhostname}:${port}" >> /home/ec2-user/travelappaccess

FILE=/home/ec2-user/microservicesaccess
if [ -f "$FILE" ]; then
    cat /home/ec2-user/travelappaccess >> /home/ec2-user/microservicesaccess
fi
