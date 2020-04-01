FROM node:12.2.0
LABEL Kaushik Samanta <kaushiksamanta23@gmail.com>
WORKDIR /app
COPY package.json yarn.lock  /app/
RUN yarn global add @angular/cli@6.0.8
RUN yarn install
COPY . /app
CMD yarn ng serve client --host 0.0.0.0
