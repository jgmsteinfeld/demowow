#/bin/bash

#Check if Minikube already running or stopped
ministatus=`minikube status | grep host | cut -d ' ' -f2`
case $ministatus in
        "Running")
           echo "Minikube is already running"
           exit;;
        "Stopped")
           echo "Minikube is stopped. Start by running: minikube start"
           exit;;
        *)
           ;;
esac

# check if -a <App> has been submitted on commandline, otherwise display interactive menu
if [ "$#" -gt 1 ]; then

        usage() { echo "Usage: $0 [-a <Boutique|TravelApp|RobotShop}>]" 1>&2; exit 1; }

        while getopts ":a:" i 
        do
           case "${i}" in
                a ) opt=${OPTARG}
                  if [[ ${opt} != "Boutique" && ${opt} != "TravelApp" && ${opt} != "RobotShop" ]]; then
                    usage
                  fi
                  ;;
                * ) usage ;; # Print helpFunction in case parameter is non-existent
           esac
        done
        if [ -z "${opt}" ] ; then
           usage
        fi
else
        #Interactive install display menu of available apps
        PS3='Please enter the K8s App you wish to install: '
        options=("Boutique" "TravelApp" "RobotShop" "Quit")
        select opt in "${options[@]}"
        do
           case $opt in
                "Boutique")
                   break;;
                "TravelApp")
                   break;;
                "RobotShop")
                   break;;
                "Quit")
                   exit
                   ;;
                *) echo "invalid option $REPLY";;
           esac
        done
fi

minikube start --driver=none 
#minikube start --cpus=max --memory=max

#Install Istio
export PATH=/home/ec2-user/git/istio-1.11.2/bin:$PATH

cd /home/ec2-user/git/istio-1.11.2 

#Install Istio with the demo profile
istioctl install --set profile=demo --set hub=gcr.io/istio-release -y  

sleep 10

#Install Prometheus to gather metric data (Needed by Kaili and Istio to visualize Service Mesh)
kubectl apply -f /home/ec2-user/git/istio-1.11.2/samples/addons/prometheus.yaml

sleep 10

#Install kube-state-metrics
kubectl apply -f /home/ec2-user/git/kube-state-metrics/examples/standard/

sleep 2

#Install Grafana dashboard to view Prometheus metrics
kubectl apply -f /home/ec2-user/git/istio-1.11.2/samples/addons/grafana.yaml

sleep 5

#Install Kiali Web Interface to visualize Istio Service Mesh
kubectl apply -f /home/ec2-user/git/istio-1.11.2/samples/addons/kiali.yaml

sleep 5

# Install Jaeger tracing app - Jaeger takes up too many resources so disabling for now
#kubectl apply -f /home/ec2-user/git/istio-1.11.2/samples/addons/jaeger.yaml

sleep 10

#Install node-exporter via Helm (https://github.com/prometheus-community/helm-charts/tree/main/charts/prometheus-node-exporter)
helm repo add prometheus-community https://prometheus-community.github.io/helm-charts
helm repo update
helm install node-expoerter1 prometheus-community/prometheus-node-exporter

#Install Prometheus Alert Mgr (https://github.com/prometheus-community/helm-charts/tree/main/charts/alertmanager)
helm install alrtmgr1 prometheus-community/alertmanager

#install Chaos-Mesh to be able to induce issues into the enviornment
helm repo add chaos-mesh https://charts.chaos-mesh.org
kubectl create ns chaos-testing
helm install chaos-mesh chaos-mesh/chaos-mesh --namespace=chaos-testing --version v2.0.1 --set dashboard.create=true

sleep 2
kubectl -n chaos-testing patch svc chaos-dashboard -p '{"spec": {"type": "LoadBalancer"}}'

#Assign External IP to kiali service so interface can be accessed externally
kubectl -n istio-system patch svc kiali -p '{"spec": {"type": "LoadBalancer"}}'

#Assign External IP to Prometheus service so interface can be accessed externally
kubectl -n istio-system patch svc prometheus -p '{"spec": {"type": "LoadBalancer"}}'

#Assign External IP to Grafana service so interface can be accessed externally
kubectl -n istio-system patch svc grafana -p '{"spec": {"type": "LoadBalancer"}}'

#Get Port for Kiali to generate URL
kialiport=`kubectl -n istio-system get service kiali -o jsonpath='{.spec.ports[?(@.name=="http")].nodePort}'`

#Get Port for Prometheus to generate URL
promeport=`kubectl -n istio-system get service prometheus -o jsonpath='{.spec.ports[?(@.name=="http")].nodePort}'`

#Get Port for Grafrana to generate URL
grafport=`kubectl -n istio-system get service grafana -o jsonpath='{.spec.ports[?(@.name=="service")].nodePort}'`

#Get Port for Chaos-Mesh Dashboard URL
chaosport=`kubectl -n chaos-testing get service chaos-dashboard -o jsonpath='{.spec.ports[?(@.name=="http")].nodePort}'`

#Make Kubernetes API's available externally
kubectl -n default patch svc kubernetes -p '{"spec": {"type": "LoadBalancer"}}'

#Create a role binding to default service account so it can list out resources. This is needed by discovery to discover the cluster.
kubectl create clusterrolebinding cluster-system-defaultsa --clusterrole=cluster-admin --user=system:serviceaccount:default:default

# Retrieve the Bearer token that we will use to discover the Cluster with Discovery
TOKEN=$(kubectl get secrets -o jsonpath="{.items[?(@.metadata.annotations['kubernetes\.io/service-account\.name']=='default')].data.token}"|base64 --decode)

#Deploy Metric Server
kubectl apply -f /home/ec2-user/git/metricserver/metricserver.yaml

sleep 5

#Start Kubernetes Dashboard
kubectl apply -f /home/ec2-user/git/kdashboard/recommended.yaml

#Expose Kubernetes Dashboard Externally
kubectl -n kubernetes-dashboard patch svc kubernetes-dashboard -p '{"spec": {"type": "LoadBalancer"}}'

#Get Kubernetes Dashboard Port
kdashport=`kubectl -n kubernetes-dashboard get svc | grep LoadBalancer | cut -d ':' -f2 | cut -d '/' -f1`

sleep 2

#Install Weave Scope for visibility into cluster connections
#kubectl apply -f "https://cloud.weave.works/k8s/scope.yaml?k8s-version=$(kubectl version | base64 | tr -d '\n')"

#Surface Webscope Port externally
#kubectl -n weave patch svc weave-scope-app -p '{"spec": {"type": "LoadBalancer"}}'

#Get WeaveScope dashboard port
#weaveport=`kubectl -n weave get svc | grep LoadBalancer | cut -d ':' -f2 | cut -d '/' -f1`

# Apply Specific Application Based Installation
case $opt in
    "Boutique")
        . /home/ec2-user/install_boutiqueapp.sh
        ;;
    "TravelApp")
       . /home/ec2-user/install_travelapp.sh 
        ;;
    "RobotShop")
       . /home/ec2-user/install_robot_shop.sh 
        ;;
esac


#Create Tunnel to allow app to be available externally
nohup minikube tunnel &> /dev/null &


# Record Public URL and Private URL for application in robotshopaccess file
apiserverurl=`kubectl cluster-info | grep control | awk '{ print $NF }'`
pubip=`curl -s v4.ident.me`
pubhostname=`curl -s http://169.254.169.254/latest/meta-data/public-hostname`
privip=`curl http://169.254.169.254/latest/meta-data/local-ipv4 2> /dev/null`
port=`kubectl -n boutique get svc/frontend-external | grep frontend | cut -d ":" -f2 | cut -d "/" -f1`

# Record Public and Private Application Access
echo "==========  BASE ENVIRONMENT ACCESS DETAILS =========="  > /home/ec2-user/microservicesaccess
echo "Public Kiali Access: http://${pubhostname}:${kialiport}" >> /home/ec2-user/microservicesaccess
echo "Public Prometheus URL: http://${pubhostname}:${promeport}" >> /home/ec2-user/microservicesaccess
echo "Public Grafana URL: http://${pubhostname}:${grafport}" >> /home/ec2-user/microservicesaccess
echo "Kubernetes Dashboard URL: https://${pubhostname}:${kdashport}" >> /home/ec2-user/microservicesaccess
echo "Chaos-Mesh Dashboard URL: http://${pubhostname}:${chaosport}" >> /home/ec2-user/microservicesaccess
#echo "Weave Scope URL: http://${pubhostname}:${weaveport}" >> /home/ec2-user/microservicesaccess
echo "" >> /home/ec2-user/microservicesaccess
echo "========== The Following is needed by discovery to discover the Cluster =============" >> /home/ec2-user/microservicesaccess
echo "Cluster API URL: ${apiserverurl}" >> /home/ec2-user/microservicesaccess
echo "Prometheus URL: http://${privip}:${promeport}" >> /home/ec2-user/microservicesaccess
echo "Bearer Token below to be used as credential" >> /home/ec2-user/microservicesaccess
echo "${TOKEN}" >> /home/ec2-user/microservicesaccess
echo "" >> /home/ec2-user/microservicesaccess
echo "========== App Access Information ==========" >> /home/ec2-user/microservicesaccess

case $opt in
    "Boutique")
        cat /home/ec2-user/boutiqueappaccess >> /home/ec2-user/microservicesaccess 
        ;;
    "TravelApp")
       cat /home/ec2-user/travelappaccess >> /home/ec2-user/microservicesaccess 
        ;;
    "RobotShop")
       cat /home/ec2-user/robotshopaccess >> /home/ec2-user/microservicesaccess 
        ;;
esac
