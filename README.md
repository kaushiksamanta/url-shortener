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
| RUN_MIGRATIONS     | url-shortener    |
| URL_DOMAIN         | localhost        |

3) Build all the docker files using the shell script using dev as environment.

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
