# demo-t2
Demo app


to build production image
```docker build -t devalf/demo-client .```

to build dev image
```docker build -f Dockerfile.dev -t devalf/demo-client .```

run client docker separately 

```docker run --rm -p 8080:8080 -e "HOST=0.0.0.0" -d <image_id>```

```docker run --rm -p 8081:8081 -d <image_id>```

to stop container
```docker stop -t 5 <container_id>```

to remove unused data
```docker system prune```

docker compose build
```docker-compose -f docker-compose.dev.yml build```

docker compose run
```docker-compose -f docker-compose.dev.yml up```

docker compose build & run
```docker-compose -f docker-compose.dev.yml up --build```

docker compose stop
```docker-compose -f docker-compose.dev.yml stop```
