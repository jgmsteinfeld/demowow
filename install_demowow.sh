#/bin/bash

#Install Minikube
curl -LO https://storage.googleapis.com/minikube/releases/v1.22.0/minikube-linux-amd64
sudo install minikube-linux-amd64 /usr/local/bin/minikube
rm -f ./minikube-linux-amd64

#Install Kubectl
curl -LO "https://dl.k8s.io/release/v1.21.0/bin/linux/amd64/kubectl"
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
wget -O demowow.zip https://github.com/jgmsteinfeld/demowow/releases/download/v1.6.2/demowow-1.6.2.zip 
unzip demowow.zip
rm -f demowow.zip
mv demowow-1.6.2/* .
rm -rf demowow-1.6.2

#Get latest Servicenow-Optimiz Grafana Plugin
wget -O sn-grafana.zip https://github.com/optimizca/servicenow-grafana/archive/refs/heads/main.zip
unzip sn-grafana.zip
rm -f sn-grafana.zip
mv servicenow-grafana-main/dist git/servicenow-optimiz-plugin
rm -rf servicenow-grafana-main

#Get latest Novatec-SDG-Panel for Grafana
wget -O novatec-sdg.zip https://github.com/R2DToo/novatec-service-dependency-graph-panel/archive/refs/heads/master.zip
unzip novatec-sdg.zip
rm -f novatec-sdg.zip
mv novatec-service-dependency-graph-panel-master/dist git/novatec-sdg-panel
rm -rf novatec-service-dependency-graph-panel-master

#Get latest Servicenow-Optimiz dashboards for Grafana
wget -O grafana-dashboards.zip https://github.com/R2DToo/ServiceNow-Optimiz-Plugin-AMI/archive/refs/heads/main.zip
unzip grafana-dashboards.zip
rm -f grafana-dashboards.zip
rm -f ServiceNow-Optimiz-Plugin-AMI-main/dashboards/dashboards.yaml
rm -rf git/dashboards
mkdir git/dashboards
mv ServiceNow-Optimiz-Plugin-AMI-main/dashboards git/dashboards
rm -rf ServiceNow-Optimiz-Plugin-AMI-main

#Setup Crontab Entries to keep disk clean
(sudo crontab -l 2>/dev/null; echo "*30 * * * * /home/ec2-user/clear_logs.sh") | sudo crontab -
(sudo crontab -l 2>/dev/null; echo "0 0 * * * docker system prune -a -f") | sudo crontab -
(sudo crontab -l 2>/dev/null; echo "0 0 * * * /usr/bin/rm -f /var/log/messages-*") | sudo crontab -
