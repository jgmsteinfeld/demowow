#/bin/bash


# Apply Istio 
cd /home/ec2-user/git/robot-shop/K8s/Istio

# delete payment fix (Not sure this is needed)
#kubectl -n robot-shop delete -f payment-deployment-fix.yaml

# delete the Istio istio-ingressgateway
kubectl -n robot-shop delete -f gateway.yaml

# Install Robot-Shop using Helm
cd /home/ec2-user/git/robot-shop/K8s/helm
helm uninstall robot-shop --namespace robot-shop

# Remove robot-shop namespace in Kubernetes
kubectl delete ns robot-shop

#Detele robotshopaccess file
#rm -f /home/ec2-user/robotshopaccess

#Remove access details from microserviceaccess
sed '/RobotShop/d' /home/ec2-user/microservicesaccess > /home/ec2-user/microserviceaccess.new
mv -f /home/ec2-user/microserviceaccess.new /home/ec2-user/microservicesaccess
