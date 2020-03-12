<h1 align="center">Welcome to url-shortener 👋</h1>
<p>
  <a href="#" target="_blank">
    <img alt="License" src="https://img.shields.io/github/license/kaushiksamanta/url-shortener?style=for-the-badge" />
  </a><a href="#" target="_blank">
  <img alt="Open Issues" src="https://img.shields.io/github/issues-raw/kaushiksamanta/url-shortener?style=for-the-badge">
  </a><a href="#" target="_blank">
  <img alt="Closed Issues" src="https://img.shields.io/github/issues-closed-raw/kaushiksamanta/url-shortener?style=for-the-badge">
  </a><a href="#" target="_blank">
  <img alt="Tag" src="https://img.shields.io/github/v/tag/kaushiksamanta/url-shortener?style=for-the-badge">
  </a><a href="#" target="_blank">
  <img alt="Release" src="https://img.shields.io/github/v/release/kaushiksamanta/url-shortener?style=for-the-badge">
  </a><a href="#" target="_blank">
  <img alt="Activity" src="https://img.shields.io/github/commit-activity/w/kaushiksamanta/url-shortener?style=for-the-badge">
  </a><a href="#" target="_blank">
  <img alt="Size" src="https://img.shields.io/github/languages/code-size/kaushiksamanta/url-shortener?style=for-the-badge">
  </a><a href="#" target="_blank">
  <img alt="Docker-api-pulls" src="https://img.shields.io/docker/pulls/kaushiksamanta/url-shortener-api?label=API-DOCKER-PULLS&style=for-the-badge">
  </a><a href="#" target="_blank">
  <img alt="Docker-client-pulls" src="https://img.shields.io/docker/pulls/kaushiksamanta/url-shortener-client?label=CLIENT-DOCKER-PULLS&style=for-the-badge">
  </a><a href="#" target="_blank">
  <img alt="Docker-api-size" src="https://img.shields.io/docker/image-size/kaushiksamanta/url-shortener-api/0.0.1?label=API-DOCKER-IMAGE&style=for-the-badge">
  </a><a href="#" target="_blank">
  <img alt="Docker-client-size" src="https://img.shields.io/docker/image-size/kaushiksamanta/url-shortener-client/0.0.1?label=CLIENT-DOCKER-IMAGE&style=for-the-badge">
  </a>
</p>

> ### Url Shortener built using Nest js 🚀, Angular 🅰️ , Docker 🐳 inside Nrwl Nx workspace.

# Pre-requisites :-
1. Docker
2. Docker Compose
3. Node js
4. Npm

# Usage :-
1) Create a Environment file (dev.env) in the root of the cloned project.

```sh
touch dev.env
```

2) Set the below variables in the dev.env file

| Name               | Value            |
| ------------------ | ---------------- |
| POSTGRES_HOST      | url-shortener-db |
| POSTGRES_PORT      | 5432             |
| POSTGRES_USER      | postgres         |
| POSTGRES_PASSWORD  | 12345            |
| POSTGRES_DATABASE  | url-shortener    |
| PORT (Api Server)  | 3333             |
| APP_MODE           | DEV              |
| URL_DOMAIN         | localhost        |

1) Build all the docker files using the shell script using dev as environment.

```sh
./docker-build-all.sh dev
```

4) Run the project using docker compose.
```sh
docker-compose -f docker-compose_dev.yml up
```

5) Stop the project using docker compose. (Optional)
```sh
docker-compose -f docker-compose_dev.yml down
```

# Upcoming changes
1) Setting up Nginx as a load balancer and reverse proxy.

2) LRU Caching strategy for top frequent url's using Redis.

3) Setup the project for production ready.

4) Add unit tests for api and frontend using jest.

5) Configure Circle CI for docker build and unit tests.

# Dockerhub images (Public)
1) https://hub.docker.com/repository/docker/kaushiksamanta/url-shortener-api
2) https://hub.docker.com/repository/docker/kaushiksamanta/url-shortener-client

# Screenshots
1) Url-shortener UI:-
<img width="1440" alt="Screen Shot 2020-03-02 at 9 38 27 PM" src="https://user-images.githubusercontent.com/14096113/75737659-4fcbdc00-5cce-11ea-8167-6a3d4fe5294c.png">

<img width="1440" alt="Screen Shot 2020-03-02 at 9 38 47 PM" src="https://user-images.githubusercontent.com/14096113/75738532-91f61d00-5cd0-11ea-913a-137bbc050697.png">

2) Docker compose runner:-
<img width="1332" alt="Screen Shot 2020-03-02 at 9 32 11 PM" src="https://user-images.githubusercontent.com/14096113/75737670-59554400-5cce-11ea-98f6-680039ebd74b.png">

3) Docker build:-
<img width="1332" alt="Screen Shot 2020-03-02 at 9 37 45 PM" src="https://user-images.githubusercontent.com/14096113/75737672-5c503480-5cce-11ea-90a6-b914db9eea66.png">

# Author

👤 **Kaushik Samanta**

* Website: kaushiksamanta.github.io
* Github: [@kaushiksamanta](https://github.com/kaushiksamanta)
* LinkedIn: [@kaushik-samanta](https://linkedin.com/in/kaushik-samanta)

# 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/kaushiksamanta/url-shortener/issues).

# Show your support

Give a ⭐️ if this project helped you!

***
