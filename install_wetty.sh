#/bin/sh

# Validate password is passed in via first parameter
if [ "$1" == "" ]; then
       echo "Usage: $0 <demowow password>" 1>&2; exit 1;
fi

# Disable priorities plugin 
sudo sed -i 's/enabled = 1/enabled = 0/g' /etc/yum/pluginconf.d/priorities.conf

# Install node & npm (Do as root)
sudo yum remove -y node npm nodesource-release-el7-1
sudo yum groupinstall -y 'Development Tools'
curl -fsSL https://rpm.nodesource.com/setup_14.x | sudo bash -
sudo yum clean all -y
sudo yum update -y
sudo yum install -y nodejs

#Install yarn (Do as Root)
curl -sL https://dl.yarnpkg.com/rpm/yarn.repo | sudo tee /etc/yum.repos.d/yarn.repo
sudo yum install -y yarn

#Install Wetty (Do as Root)
sudo yarn global add wetty@2.0.2
echo "export PATH=\$PATH:/usr/local/bin" | sudo tee -a /etc/profile
source /etc/profile

# Enable Local Login on EC2
sudo sed -i 's/PasswordAuthentication no/PasswordAuthentication yes/g' /etc/ssh/sshd_config
sudo service sshd restart
sudo sed -i 's/ssh_pwauth:   false/ssh_pwauth:  true/g' /etc/cloud/cloud.cfg

# Create demowow user (Do as Root)
sudo adduser -m -g wheel  demowow
#echo "D3m0w0w1" | sudo passwd demowow --stdin
echo $1 | sudo passwd demowow --stdin

# Crete Wetty service file
cat << EOF | sudo tee /etc/systemd/system/wetty.service > /dev/null
[Unit]
Description=WeTTY
After=network-online.target

[Service]
Type=simple
ExecStart=/bin/bash -c "wetty --host 0.0.0.0 --port 3000 --title demoWow --force-ssh  --ssh-port 22 --ssh-auth='publickey,password'"
Restart=always
RestartSec=2
TimeoutStopSec=5
SyslogIdentifier=wetty

[Install]
WantedBy=multi-user.target
EOF

# Start Wetty service
sudo systemctl daemon-reload
sudo systemctl enable wetty
sudo systemctl start wetty
