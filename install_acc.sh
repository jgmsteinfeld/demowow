#/bin/bash

read -p "Enter your Instance Short Name: " sninstance
read -p "Enter ACC User Name: " accuser
read -p "Enter ACC Password: " -s accpwd

accport=`kubectl -n infra get service midserver -o jsonpath='{.spec.ports[?(@.name=="http")].nodePort}'`
privip=`curl http://169.254.169.254/latest/meta-data/local-ipv4 2> /dev/null`
echo


ACC_USER=${accuser} ACC_PWD=${accpwd} ACC_MID=ws://${privip}:${accport}/ws/events bash -c "$(curl -L https://${sninstance}.service-now.com/api/sn_agent/agents/install_agent)"

