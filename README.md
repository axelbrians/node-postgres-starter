# Dockerized Node Postgress Starter Template

## How To
- Run in dev
```
docker-compose -f docker-compose.yml -f docker-compose.dev.yml up -d
```
- Stop in dev
```
docker-compose -f docker-compose.yml -f docker-compose.dev.yml down
```


- Run in prod
```
docker-compose -f docker-compose.yml -f docker-compose.prod.yml up -d
```

- Stop in prod
```
docker-compose -f docker-compose.yml -f docker-compose.prod.yml down -v
```