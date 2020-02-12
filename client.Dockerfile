# base image
FROM node:12.2.0

LABEL Kaushik Samanta <kaushiksamanta23@gmail.com>

# set working directory
WORKDIR /app

# install and cache app dependencies
COPY package.json /app/package.json

RUN npm install @angular/cli@6.0.8 -g

RUN npm install

# add app
COPY . /app

# start app
CMD ng serve client --host 0.0.0.0
