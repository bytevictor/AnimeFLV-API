#Este dockerfile sirve para desplegar el microservicio

FROM node:14.14.0-stretch-slim
LABEL version "1.0" mantainer="ByteVictor"

RUN npm i -g ts-node typescript

WORKDIR /microservicio/animeflv

RUN chown -R node /microservicio

COPY --chown=node package*.json ./
COPY --chown=node tsconfig.json ./

WORKDIR /microservicio/animeflv/src

COPY --chown=node src/ ./

WORKDIR /microservicio/animeflv

USER node
RUN npm ci

RUN tsc

CMD ["node", "src/server.js"]