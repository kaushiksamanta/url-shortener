# base image
FROM node:12.2.0

# set working directory
WORKDIR /app

# install and cache app dependencies
COPY package.json /app/package.json
RUN npm install

# add app
COPY . /app

EXPOSE 3000

CMD ["npm", "run", "start", "api"]
