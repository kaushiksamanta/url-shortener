# base image
FROM node:12.2.0
LABEL Kaushik Samanta <kaushiksamanta23@gmail.com>
WORKDIR /app
COPY package.json yarn.lock  /app/
RUN yarn install
RUN yarn global add ts-node

# add app
COPY . /app
EXPOSE 3333 7778
CMD yarn start api
