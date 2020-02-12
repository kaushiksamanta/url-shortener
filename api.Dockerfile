# base image
FROM node:12.2.0

LABEL Kaushik Samanta <kaushiksamanta23@gmail.com>

# set working directory
WORKDIR /app

# install and cache app dependencies
COPY package.json /app/package.json
RUN npm install

# add app
COPY . /app

EXPOSE 3333

CMD npm run start api
