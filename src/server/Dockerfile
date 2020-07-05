FROM node:13.13.0-alpine

RUN mkdir -p /usr/src/server-app

WORKDIR /usr/src/server-app

COPY package*.json ./

RUN npm i --silent

COPY . .

EXPOSE $PORT_API_SERVER

CMD ["npm", "start"]
