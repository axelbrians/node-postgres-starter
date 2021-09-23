# base image for this Dockerfile
FROM node:current-alpine3.14
WORKDIR /app

# will copy dependencies to workdir
COPY package.json .

# RUN image build step
# install all dependencies
# RUN npm install


# grab this env variable from docker-compose
ARG NODE_ENV

# instead of running regular npm install when building image
# we will run this bash script which install spesific package based
# on $NODE_ENV
# the \ mean code below it will count as single line of command
RUN if [ "$NODE_ENV" = "development" ]; \
    then npm install; \
    else npm install --only=production; \
    fi


# COPY <src> <dest>
# dest will set to /app since i assign in to workdir
COPY . ./

# didnt really expose this port, but for docs purpose 
# that i want to expose this port
EXPOSE 3000

# CMD run after image is created
# run cmd command on container when started
CMD [ "node", "./src/app.js" ]