FROM node:14.14.0-stretch-slim
LABEL version "1.0" mantainer="ByteVictor"



RUN mkdir /animeflv_modules
RUN mkdir /test

#Cambiamos el directorio para poder acceder a los archivos
WORKDIR /animeflv_modules

COPY package.json .
COPY package-lock.json .

RUN npm install

RUN chmod 777 /animeflv_modules/*

#Por defecto funciona como root, cambiamos el nivel de permisos
RUN useradd usuario
RUN chown -R usuario:usuario /animeflv_modules
USER usuario


WORKDIR /test

CMD cp -r /animeflv_modules/node_modules/ /test/ && npm run test