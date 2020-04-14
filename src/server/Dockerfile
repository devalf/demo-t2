FROM node:13.5.0-alpine

RUN mkdir -p /usr/src/server-app

WORKDIR /usr/src/server-app

COPY package*.json ./

RUN npm i --silent

COPY . .

EXPOSE 8081

CMD ["npm", "start"]
