#!/bin/bash

#############################################################
### Example:-
### ./docker-build-image.sh {api} {dev}
#############################################################

build_hash() {
  image="$1"
  git_short_hash=$(git rev-parse --short HEAD)
  echo "============================================================="
  echo "Building docker image :- url-shortener-$image:$git_short_hash"
  echo "============================================================="
  docker build -t "url-shortener-$image:$git_short_hash" -f "$image.Dockerfile" .
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
    build_hash $1
  fi
fi
