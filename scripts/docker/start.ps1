# Invoke-Expression "docker build -t alpsbte"

Invoke-Expression "docker build . -t alpsbte-website:latest"
Invoke-Expression "docker run -p 5000:4200 alpsbte-website:latest"
# Invoke-Expression "docker exec -it"

# Invoke-Expression "docker run -it --rm -v ${PWD}:/app -v /app/node_modules -p 3001:3000 -e CHOKIDAR_USEPOLLING=true hello-world:dev"
