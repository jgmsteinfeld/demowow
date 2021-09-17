#/bin/bash

#Check if boutique is already installed
var=`kubectl get namespace | grep boutique`
if [ "${var}" != "" ] ; then
    echo "Boutique is already installed, Exiting"
    exit
fi

#Install Boutique Demo Application
cd /home/ec2-user/git/microservices-demo


#Create Kubernetes namespace to house our Boutique application in
kubectl create ns boutique

#Create secret for accessing your LightStep environment
#kubectl -n boutique create secret generic lightstep-credentials --from-literal=accessToken="<LightStep Access Token>"

#Enable Istio Injection for boutique namespace
kubectl label namespace boutique istio-injection=enabled

#Deploy our boutique application
kubectl -n boutique apply -f ./release


# Get IstioGtway port information
IstioGtwyPort=`kubectl -n istio-system get service istio-ingressgateway -o jsonpath='{.spec.ports[?(@.name=="http2")].nodePort}'`

#Create Tunnel to allow app to be available externally
nohup minikube tunnel &> /dev/null &

#Get Port Information
pubip=`curl -s v4.ident.me`
pubhostname=`curl -s http://169.254.169.254/latest/meta-data/public-hostname`
privip=`curl http://169.254.169.254/latest/meta-data/local-ipv4 2> /dev/null`
IstioGtwyPort=`kubectl -n istio-system get service istio-ingressgateway -o jsonpath='{.spec.ports[?(@.name=="http2")].nodePort}'`
port=`kubectl -n boutique get svc/frontend-external | grep frontend | cut -d ":" -f2 | cut -d "/" -f1`

# Record Public and Private Application Access
echo "" > /home/ec2-user/boutiqueappaccess
echo "Boutique Application Access Information: --------------------" >> /home/ec2-user/boutiqueappaccess
echo "Boutique PublicIP Access: http://${pubhostname}:${port}" >> /home/ec2-user/boutiqueappaccess
echo "Boutique Public IstioGateway URL: http://${pubhostname}:${IstioGtwyPort}" >> /home/ec2-user/boutiqueappaccess
echo "Boutique PrivateIP Access: http://${privip}:${port}" >> /home/ec2-user/boutiqueappaccess

# Update microservicesaccess file
FILE=/home/ec2-user/microservicesaccess
if [ -f "$FILE" ]; then
    cat /home/ec2-user/boutiqueappaccess >> /home/ec2-user/microservicesaccess
fi



