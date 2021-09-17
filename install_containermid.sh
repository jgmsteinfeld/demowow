#/bin/bash

read -p "Enter SN Instance Name: " SNInstanceName
read -p "Enter Mid User Name: " miduser
read -p "Enter Mid Password: " midpass
read -p "Enter Mid Name: " midname


sed -e "s/<SNInstanceName>/${SNInstanceName}.service-now.com/g" /home/ec2-user/git/containermid/middeploy.yaml.template | \
sed -e "s/<miduser>/$miduser/g" | \
sed -e "s/<midpass>/$midpass/g" | \
sed -e "s/<midname>/$midname/g"  > /home/ec2-user/git/containermid/middeploy.yaml

# Create namespace for MID - infra
kubectl apply -f /home/ec2-user/git/containermid/midnamespace.yaml

# Create secret to hold MID Server Password to authenticate with SN Instance
kubectl create secret generic -n infra mid-server-secret --from-literal=SN_PASSWD=${midpass}

# Deploy the MID
kubectl apply -f /home/ec2-user/git/containermid/middeploy.yaml

#sleep 5

#Expose MID Server port 80 for ACC
#kubectl -n infra patch svc midserver -p '{"spec": {"type": "LoadBalancer"}}'

#Create Tunnel to allow app to be available externally
nohup minikube tunnel &> /dev/null &


#Get IP Address of current box
privip=`curl http://169.254.169.254/latest/meta-data/local-ipv4`

#Install ACC Agent
#ACC_USER=accuser ACC_PWD=laser2002 ACC_MID=ws://${privip}:31090/ws/events bash -c "$(curl -L https://${SNInstanceName}.service-now.com/api/sn_agent/agents/install_agent)"
