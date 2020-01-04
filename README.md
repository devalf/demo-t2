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
