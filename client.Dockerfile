# base image
FROM node:12.2.0

# set working directory
WORKDIR /app

# install and cache app dependencies
COPY package.json /app/package.json
RUN npm install

# add app
COPY . /app

# start app
CMD ng serve client --host 0.0.0.0
