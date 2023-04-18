FROM node:19-alpine3.16
ENV TERM=xterm-256color

WORKDIR /usr/src/app

RUN apk add --update \
  git \
  curl \
  openssh 

# git configuration
ARG SSH_PRIVATE_KEY
ARG USERNAME
ARG EMAIL

RUN mkdir ~/.ssh/ \
  && echo "$SSH_PRIVATE_KEY" >> ~/.ssh/id_rsa \
  && chmod 600 ~/.ssh/id_rsa

RUN git config --global user.name "$USERNAME" \
  && git config --global user.email "$EMAIL"

# npm package install
COPY package*.json ./
RUN npm install --silent
COPY . .
EXPOSE 3000

# neovim configuration
RUN sh -c 'curl -fLo "${XDG_DATA_HOME:-$HOME/.local/share}"/nvim/site/autoload/plug.vim --create-dirs \
       https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim'
