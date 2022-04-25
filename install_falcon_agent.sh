#/bin/bash

fs = falcon-sensor-6.37.0-13402.el7.x86_64.rpm
rhel=`rpm -E %{rhel}`
if [ $rhel == 7 ]; then
   wget -O $fs https://surf.service-now.com/sys_attachment.do?sys_id=da090311db664910b0b75ac2ca96197a 
fi

sudo yum install ./$fs -y
sleep 5
sudo /opt/CrowdStrike/falconctl -s -f --cid=77096FEA2CDA4F6E9B6D3604E826949F-E1
sleep 2
sudo service falcon-sensor start
sleep 5
ps -e | grep falcon-sensor
sudo service falcon-sensor status | grep connected
rm $fs 
