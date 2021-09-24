# Dockerized Node Postgress Starter Template

## How To
- Run
```
docker-compose -f docker-compose.yml -f docker-compose.<dev/prod>.yml up -d
```
- Stop
```
docker-compose -f docker-compose.yml -f docker-compose.<dev/prod>.yml down
```

Dont forget to run 
```
docker-compose -f docker-compose.yml -f docker-compose.<dev/prod>.yml up -d --build
```
everytime changes made to any of dockerfile. --build force docker-compose to build new image with new configuration.