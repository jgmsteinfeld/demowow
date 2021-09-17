#/bin/sh

echo -n "Enter SN Instance Name: "
read SNInstanceName
echo -n "Enter Mid User Name: "
read miduser
echo -n "Enter Mid Password: "
read midpass
echo -n "Enter Mid Name: "
read midname


sed -e "s/<YOUR_INSTANCE>/${SNInstanceName}/g" /home/ec2-user/git/localmid/agent/config.xml.template | \
sed -e "s/<YOUR_INSTANCE_USER_NAME_HERE>/$miduser/g" | \
sed -e "s/<YOUR_INSTANCE_PASSWORD_HERE>/$midpass/g" | \
sed -e "s/<YOUR_MIDSERVER_NAME_GOES_HERE>/$midname/g"  > /home/ec2-user/git/localmid/agent/config.xml
