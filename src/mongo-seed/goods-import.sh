#! /bin/bash

mongoimport --host mongo-db --db demo-t2 --collection goods --type json --file /mongo-seed/goods.json --jsonArray
