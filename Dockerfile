FROM node:14.14.0-stretch-slim
LABEL version "1.0" mantainer="ByteVictor"


# Esto necesita privilegios superguay
RUN npm i -g mocha ts-node typescript && mkdir /node_modules && chmod 755 /node_modules && chown node /node_modules 

USER node
COPY --chown=node package*.json ./
RUN npm i

WORKDIR /test

CMD ["npm","run","test"]
