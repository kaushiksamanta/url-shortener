#!/bin/bash

#############################################################
### Example (Dev):-
### ./docker-build-all.sh {dev}

### Example (Prod):-
### ./docker-build-all.sh
#############################################################

## declare an array variable
declare -a arr=("api" "client")

## now loop through the above array
for i in "${arr[@]}"
do
  if [[ "$1" == "dev" ]];then
    ./docker-build-image.sh "$i" "$1"
  else
    ./docker-build-image.sh "$i"
  fi
done
