FROM mongo:4.2

COPY ./init-db.d/mongo-init.js /docker-entrypoint-initdb.d

COPY ./init-db.d/goods.js /docker-entrypoint-initdb.d
