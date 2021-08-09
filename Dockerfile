FROM node:latest

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci

COPY . .

EXPOSE 4200

ENTRYPOINT npm run start
RUN ["echo", "Alps BTE website starting..."]
