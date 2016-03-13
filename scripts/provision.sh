#!/bin/sh

sudo yum install kernel-devel-$(uname -r) -y
sudo yum install gcc.x86_64 -y
sudo yum install libgcc.x86_64 -y
sudo yum install xz.x86_64 -y
sudo yum install xz-libs.x86_64 -y
wget -O /tmp/node.tar.xz https://nodejs.org/dist/v4.4.0/node-v4.4.0-linux-x64.tar.xz
tar Jxf /tmp/node.tar.xz
rm -f /tmp/node.tar.xz
sudo mv node-v4.4.0-linux-x64 /usr/local/
sudo ln -s /usr/local/node-v4.4.0-linux-x64/bin/node /usr/local/bin/node
sudo ln -s /usr/local/node-v4.4.0-linux-x64/bin/npm /usr/local/bin/npm
