install:
	npm install

test:
	npm test

install-vm:
	vagrant ssh -c 'cd /vagrant && npm install'

test-vm:
	vagrant ssh -c 'cd /vagrant && npm test'

setup-dev:
	npm install

setup-dev-vm:
	vagrant up
	vagrant ssh -c 'cd /vagrant && npm install'
