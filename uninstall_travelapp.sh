#/bin/bash
#Delete travel components
kubectl delete -f /home/ec2-user/git/travelapp/travel_control.yaml -n travel-control
sleep 2
kubectl delete -f /home/ec2-user/git/travelapp/travel_portal.yaml -n travel-portal
sleep 2
kubectl delete -f /home/ec2-user/git/travelapp/travel_agency.yaml -n travel-agency
sleep 2

#Delete namespaces
kubectl delete namespace travel-agency
kubectl delete namespace travel-portal
kubectl delete namespace travel-control

#Remove Travelaccess file
rm -f /home/ec2-user/travelappaccess



#Remove access details from microserviceaccess
sed '/Travel/d' /home/ec2-user/microservicesaccess > /home/ec2-user/microserviceaccess.new
mv -f /home/ec2-user/microserviceaccess.new /home/ec2-user/microservicesaccess
