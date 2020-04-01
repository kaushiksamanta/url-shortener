# The builder from node image
FROM node:alpine as build-stage

RUN apk update && apk add --no-cache make git

# Move our files into directory name "app"
WORKDIR /app
COPY package.json yarn.lock  /app/
RUN yarn global add @angular/cli@6.0.8
RUN cd /app && yarn install
COPY .  /app

RUN cd /app && yarn build:client

# Build a small nginx image with static website
FROM nginx:alpine
LABEL Kaushik Samanta <kaushiksamanta23@gmail.com>
RUN rm -rf /usr/share/nginx/html/*
COPY nginx/nginx.conf /etc/nginx/nginx.conf
COPY --from=build-stage /app/dist/apps/client /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
