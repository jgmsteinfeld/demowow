#/bin/bash


kubestatus=`minikube status | grep -i kubelet | cut -d ' ' -f2`
if [[ $kubestatus == "Running" ]] ; then 
        minikube stop	
fi

minikube delete --all --purge

rm -f /home/ec2-user/*access 
