FROM node:14.14.0-stretch-slim
LABEL version "1.0" mantainer="ByteVictor"


#Creamos un directorio donde se ejecutará nuestra apliación
RUN mkdir /test

#Montamos el directorio de la aplicación
#esto ya se hace desde el comando de pruebas
#VOLUME /test

#Cambiamos el directorio para poder acceder a los archivos
WORKDIR /test

RUN npm install

#Por defecto funciona como root, cambiamos el nivel de permisos
RUN useradd usuario
USER usuario

CMD npm run test