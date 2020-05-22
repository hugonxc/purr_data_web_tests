FROM node:lts-alpine

RUN npm install -g http-server

WORKDIR /pd_web

ENV PATH /pd_web/node_modules/.bin:$PATH

COPY pd_web/package*.json ./

RUN npm install

COPY pd_web/. .


