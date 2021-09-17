#/bin/bash

#Check if boutique is already installed
var=`kubectl get namespace | grep robot-shop`
if [ "${var}" != "" ] ; then
    echo "RobotShop is already installed, Exiting"
    exit
fi

#Start Install of RobotShop
cd /home/ec2-user/git/robot-shop

# Create robot-shop namespace in Kubernetes
kubectl create ns robot-shop

#Enable Istio Injection for RobotShop namespace
kubectl label namespace robot-shop istio-injection=enabled

# Install Robot-Shop using Helm
cd /home/ec2-user/git/robot-shop/K8s/helm
helm install robot-shop --namespace robot-shop .

sleep 5
#Update Quotas and Scaling
cd /home/ec2-user/git/robot-shop/K8s
kubectl -n robot-shop apply -f resource-quota.yaml

sleep 5
# Apply Istio 
cd /home/ec2-user/git/robot-shop/K8s/Istio

# Apply the Istio istio-ingressgateway
kubectl -n robot-shop apply -f gateway.yaml

# Apply payment fix (Not sure this is needed)
#kubectl -n robot-shop apply -f payment-deployment-fix.yaml

#Create Tunnel to allow app to be available externally
nohup minikube tunnel &> /dev/null &

# Get IPs and Ports
pubip=`curl -s v4.ident.me`
privip=`curl http://169.254.169.254/latest/meta-data/local-ipv4 2> /dev/null`
pubhostname=`curl -s http://169.254.169.254/latest/meta-data/public-hostname`
port=`kubectl -n robot-shop get svc/web | grep web | cut -d ":" -f2 | cut -d "/" -f1`

# Record Public and Private Application Access
echo "" > /home/ec2-user/robotshopaccess
echo "RobotShop Application Access Information: --------------------" >> /home/ec2-user/robotshopaccess
echo "RobotShop PublicIP URL: http://${pubhostname}:${port}" >> /home/ec2-user/robotshopaccess
echo "RobotShop PrivateIP URL: http://${privip}:${port}" >> /home/ec2-user/robotshopaccess

# Update microservicesaccess file
FILE=/home/ec2-user/microservicesaccess
if [ -f "$FILE" ]; then
    cat /home/ec2-user/robotshopaccess >> /home/ec2-user/microservicesaccess
fi
