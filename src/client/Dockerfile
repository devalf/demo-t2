FROM node:10-alpine as build-stage

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm i --silent

COPY . .

RUN npm run build-prod

FROM nginx:alpine as production-stage

COPY --from=build-stage /usr/src/app/dist /usr/share/nginx/html

RUN rm /etc/nginx/conf.d/default.conf

COPY nginx/nginx.default.conf /etc/nginx/conf.d

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
