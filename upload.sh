#!/bin/bash

# convert
sh src/convert.sh

# create data
sh src/create.sh

# git push
git add .
git commit -m "write new thing"
git push origin dev