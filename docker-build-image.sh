#!/bin/bash

#############################################################
### Example:-
### ./docker-build-image.sh {api} {dev}
#############################################################

build_prod() {
  image="$1"
  git_short_hash=$(git rev-parse --short HEAD)
  package_version=$(cat package.json \
  | grep version \
  | head -1 \
  | awk -F: '{ print $2 }' \
  | sed 's/[",]//g' \
  | tr -d '[[:space:]]')

  echo "============================================================="
  echo "Building docker image :- url-shortener-$image:$git_short_hash"
  echo "============================================================="
  docker build -t "url-shortener-$image:$git_short_hash" -t "url-shortener-$image:$package_version" -f "$image-prod.Dockerfile" .
  echo "============================================================="
  echo "Tagging docker image :- url-shortener-$image:$package_version"
  echo "============================================================="
}

build_dev() {
  image="$1"
  echo "============================================================="
  echo "Building docker image :- url-shortener-$image"
  echo "============================================================="
  docker build -t "url-shortener-$image" -f "$image.Dockerfile" .
}

if [ -z "$1" ];
then
  echo "Please pass build argument !!!"
  exit 1
else
  if [[ "$2" == "dev" ]];then
    build_dev $1 $2
  else
    build_prod $1
  fi
fi
