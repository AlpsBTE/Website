Invoke-Expression 'docker-compose down'
Invoke-Expression 'docker build -t alpsbte .'
Invoke-Expression 'docker run -p 5000:4200 -d alpsbte'
