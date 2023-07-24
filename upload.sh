#!/bin/bash

# convert
bash src/convert.sh

# create data
bash src/create.sh

# git push
git add .
git commit -m "write new thing"
git push origin main