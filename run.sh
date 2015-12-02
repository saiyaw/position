#!/bin/bash

# delete existing containers
docker rm -f $(docker ps -f "name=web" -q)

docker run --name web --link postgresql -d -p 80:8080 saiyawang/position

