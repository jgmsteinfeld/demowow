#/bin/bash
rhel=`rpm -E %{rhel}`
if [ $rhel == 7 ]; then
   wget -O falcon-sensor-6.28.0-12504.el7.x86_64\(6.28.12504i\).rpm  https://surf.service-now.com/sys_attachment.do?sys_id=61adeb29db1ff810020a82630596197e
fi

sudo yum install ./falcon-sensor-6.28.0-12504.el7.x86_64\(6.28.12504i\).rpm -y
sleep 5
sudo /opt/CrowdStrike/falconctl -s -f --cid=77096FEA2CDA4F6E9B6D3604E826949F-E1
sleep 2
sudo service falcon-sensor start
sleep 5
ps -e | grep falcon-sensor
sudo service falcon-sensor status | grep connected
rm falcon-sensor-6.28.0-12504.el7.x86_64\(6.28.12504i\).rpm
