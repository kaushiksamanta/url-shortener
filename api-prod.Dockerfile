# The builder from node image
FROM node:alpine as build-stage

RUN apk update && apk add --no-cache make git

# Move our files into directory name "app"
WORKDIR /app
COPY package.json yarn.lock  /app/
RUN yarn global add @angular/cli@6.0.8
RUN cd /app && yarn install
COPY .  /app
RUN cd /app && yarn build:api

FROM node:alpine
LABEL Kaushik Samanta <kaushiksamanta23@gmail.com>
WORKDIR /app
RUN mkdir node_modules
COPY --from=build-stage /app/dist/apps/api .
RUN yarn install --frozen-lockfile --production=true
RUN yarn global add nodemon
RUN ls -la
EXPOSE 3333
CMD [ "nodemon", "main.js" ]
