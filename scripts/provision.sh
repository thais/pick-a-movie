#!/bin/sh

# Install nginx
sudo apt-get update
sudo apt-get -y install nginx

# Install node and npm
wget -O /tmp/node.tar.xz https://nodejs.org/dist/v4.4.3/node-v4.4.3-linux-x64.tar.xz
cd /opt
sudo tar Jxf /tmp/node.tar.xz
sudo ln -s /opt/node-v4.4.3-linux-x64/bin/node /usr/bin/node
sudo ln -s /opt/node-v4.4.3-linux-x64/bin/npm /usr/bin/npm

# Clean up
rm /tmp/node.tar.xz
