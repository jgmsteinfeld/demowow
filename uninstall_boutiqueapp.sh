#/bin/bash

cd /home/ec2-user/git/microservices-demo

# Delete Boutique App
kubectl -n boutique delete -f ./release

# Delete boutique namespace
kubectl delete ns boutique

rm -f /home/ec2-user/boutiqueappaccess

#Remove access details from microserviceaccess
sed '/Boutique/d' /home/ec2-user/microservicesaccess > /home/ec2-user/microserviceaccess.new
mv -f /home/ec2-user/microserviceaccess.new /home/ec2-user/microservicesaccess


