FROM node:lts-alpine

RUN npm install -g @vue/cli

RUN npm install -g @vue/cli-service

RUN npm install -g @vue/cli-plugin-babel

RUN npm install -g @vue/cli-plugin-eslint

WORKDIR /pd_web

COPY pd_web/package*.json ./

RUN npm install

COPY pd_web/. .


