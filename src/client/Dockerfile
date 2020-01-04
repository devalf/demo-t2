FROM node:10-alpine

RUN mkdir -p /usr/src/client-app

WORKDIR /usr/src/client-app

COPY package*.json ./

RUN npm i

COPY . .

CMD ["npm", "run", "build-prod"]
