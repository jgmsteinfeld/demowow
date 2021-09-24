#/bin/bash

#Install Minikube
curl -LO https://storage.googleapis.com/minikube/releases/latest/minikube-linux-amd64
sudo install minikube-linux-amd64 /usr/local/bin/minikube
rm -f ./minikube-linux-amd64

#Install Kubectl
curl -LO "https://dl.k8s.io/release/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/linux/amd64/kubectl"
sudo install -o root -g root -m 0755 kubectl /usr/local/bin/kubectl
rm -f ./kubectl

#Install Docker Runtime
sudo yum update -y
sudo yum install -y docker
sudo service docker start
sudo usermod -a -G docker ec2-user
newgrp docker

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

#Setup Crontab Entries to keep disk clean
(sudo crontab -l 2>/dev/null; echo "*30 * * * * /home/ec2-user/clear_logs.sh") | sudo crontab -
(sudo crontab -l 2>/dev/null; echo "0 0 * * * docker system prune -a -f") | sudo crontab -
(sudo crontab -l 2>/dev/null; echo "0 0 * * * /usr/bin/rm -f /var/log/messages-*") | sudo crontab -
