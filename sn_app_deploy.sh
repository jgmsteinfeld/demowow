#!/bin/bash
set -e

enter_password() {
	echo -n "Please enter the instance password: ";stty -echo; read INSTANCE_PASSWORD; stty echo; echo
	INSTANCE_PASSWORD=`echo $INSTANCE_PASSWORD | base64`

	echo -n "Please re-enter the instance password: ";stty -echo; read INSTANCE_PASSWORD1; stty echo; echo
	INSTANCE_PASSWORD1=`echo $INSTANCE_PASSWORD1 | base64`

	if [ "$INSTANCE_PASSWORD" != "$INSTANCE_PASSWORD1" ] ; then
    	echo -n "Password mismatch. Please try again"
    	exit 1
    fi
	if [[ "$OSTYPE" == "darwin"* ]]; then
		sed -i 'bak' 's/INSTANCE_PASSWORD/'$INSTANCE_PASSWORD'/g' servicenow_acc_mid_temp.yml
	else
		sed -i 's/INSTANCE_PASSWORD/'$INSTANCE_PASSWORD'/g' servicenow_acc_mid_temp.yml
	fi
}


cp servicenow_acc_mid.yml servicenow_acc_mid_temp.yml

# we must shorten the cluster name as it is part of the MID name, and MID name is max 40 chars
CLUSTER_NAME=`kubectl config current-context | cut -c1-10`
if [[ "$OSTYPE" == "darwin"* ]]; then
	sed -i 'bak' 's/CLUSTER_NAME_VALUE/'$CLUSTER_NAME'/g' servicenow_acc_mid_temp.yml
else
	sed -i 's/CLUSTER_NAME_VALUE/'$CLUSTER_NAME'/g' servicenow_acc_mid_temp.yml
fi

echo -n "Please enter the instance name (k8sitom): "; read INSTANCE_NAME

if [ -z "$INSTANCE_NAME" ]
then
      INSTANCE_NAME=k8sitom
fi

if [[ "$OSTYPE" == "darwin"* ]]; then
  	sed -i 'bak' 's/INSTANCE_NAME/'$INSTANCE_NAME'/g' servicenow_acc_mid_temp.yml
else
  	sed -i 's/INSTANCE_NAME/'$INSTANCE_NAME'/g' servicenow_acc_mid_temp.yml
fi

echo -n "Please enter the instance user name: "; read INSTANCE_USERNAME
INSTANCE_USERNAME=`echo $INSTANCE_USERNAME | base64`
if [[ "$OSTYPE" == "darwin"* ]]; then
	sed -i 'bak' 's/INSTANCE_USERNAME/'$INSTANCE_USERNAME'/g' servicenow_acc_mid_temp.yml
else
	sed -i 's/INSTANCE_USERNAME/'$INSTANCE_USERNAME'/g' servicenow_acc_mid_temp.yml
fi

enter_password

set -x
kubectl apply -f servicenow_acc_mid_temp.yml

rm servicenow_acc_mid_temp.yml*
