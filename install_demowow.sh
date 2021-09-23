#/bin/bash

#Install Minikube
curl -LO https://storage.googleapis.com/minikube/releases/latest/minikube-linux-amd64
sudo install minikube-linux-amd64 /usr/local/bin/minikube

#Install Kubectl
curl -LO https://storage.googleapis.com/minikube/releases/latest/minikube-linux-amd64
sudo install minikube-linux-amd64 /usr/local/bin/minikube

#Install Docker Runtime
sudo yum update -y
sudo yum install -y docker
sudo service docker start
sudo usermod -a -G docker ec2-user

#Install "conntrack"
sudo yum install conntrack -y

#Install Helm
curl -fsSL -o get_helm.sh https://raw.githubusercontent.com/helm/helm/master/scripts/get-helm-3
chmod 700 get_helm.sh
./get_helm.sh

#Install Git
sudo yum install git -y

#Install Htop
sudo yum install htop -y

#Install NCDU
sudo amazon-linux-extras install epel -y
sudo yum --enablerepo=epel install ncdu -y


#Get latest Demowow Image
wget https://github.com/jgmsteinfeld/demowow/archive/refs/heads/master.zip
unzip master.zip
rm -f master.zip
mv demowow-master/* .
rm -rf demowow-master
