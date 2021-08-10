FROM node:alpine
WORKDIR /usr/src/app
COPY package*.json ./
RUN ["npm", "ci"]
COPY . .
EXPOSE 4200
CMD ["npm", "run", "frontend"]
