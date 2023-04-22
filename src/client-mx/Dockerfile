FROM node:18-alpine as build-stage

ARG PORT_CLIENT_MX
ARG PORT_API_SERVER

RUN mkdir -p /usr/src/client-app-mx

WORKDIR /usr/src/client-app-mx

COPY package*.json ./

RUN npm i --silent --legacy-peer-deps

COPY . .

RUN npm run build-prod

FROM nginx:alpine as production-stage

COPY --from=build-stage /usr/src/client-app-mx/dist /usr/share/nginx/html

RUN rm /etc/nginx/conf.d/default.conf

COPY nginx/nginx.default.conf /etc/nginx/conf.d

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
