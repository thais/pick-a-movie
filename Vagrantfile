Vagrant.configure(2) do |config|
  config.vm.box = "dbsparkle/ami-ubuntu14"

  config.vm.provision "shell", path: "scripts/provision.sh"

  config.vm.network :forwarded_port, guest: 80, host: 4567
end
