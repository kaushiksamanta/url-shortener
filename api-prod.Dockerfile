# The builder from node image
FROM node:alpine as build-stage

RUN apk update && apk add --no-cache make git

# Move our files into directory name "app"
WORKDIR /app
COPY package.json package-lock.json  /app/
RUN npm install @angular/cli@6.0.8 -g
RUN cd /app && npm install
COPY .  /app

RUN cd /app && npm run build:api


FROM node:alpine

WORKDIR /app

RUN mkdir node_modules

COPY --from=build-stage /app/dist/apps/api .

RUN npm ci --only=production

RUN npm install -g nodemon

RUN ls -la

EXPOSE 3333

CMD [ "nodemon", "main.js" ]
