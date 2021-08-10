Invoke-Expression "docker rmi -f $(docker images -q)"
Invoke-Expression "docker stop $(docker ps -a -q); docker rm -f $(docker ps -a -q)"
