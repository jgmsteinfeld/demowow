#/bin/sh

read -p "Enter namespace: " ns
read -p "Enter replica count: "  rep

for svc in $(kubectl -n ${ns} get deployments | cut -d ' ' -f1 | grep -v NAME) 
do 
       kubectl -n ${ns} scale deployment ${svc} --replicas=${rep}
done
