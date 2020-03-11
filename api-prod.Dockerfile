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
COPY --from=build-stage /app/dist/apps/api .
COPY --from=build-stage /app/node_modules ./node_modules
RUN npm install -g nodemon
RUN ls -la
EXPOSE 3333
CMD [ "nodemon", "main.js" ]
