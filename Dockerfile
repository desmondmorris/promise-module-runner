FROM node:latest

RUN mkdir -p /usr/src/runner

WORKDIR /usr/src/runner

COPY modules.json /usr/src/runner/package.json

RUN npm install

COPY index.js /usr/src/runner

ENV NODE_PATH /usr/src/runner/node_modules

ENTRYPOINT ["node", "/usr/src/runner/index.js"]
