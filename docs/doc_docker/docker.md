## Docker

Se han barajado las siguientes imágenes base de Docker:
- 15.0.1-alpine3.10
- 15.0.1-buster
- 15.0.1-buster-slim
- 15.0.1-stretch
- 14.14.0-alpine3.10
- 14.14.0-buster
- 14.14.0-buster-slim
- 14.14.0-stretch
- 14.14.0-stretch-slim

Todas ellas son imágenes oficiales de Node, ya que no hay imágenes oficiales de Typescript, he preferido partir de una imagen oficial por fiabilidad e instalar las utilidades necesarias que no venían incluidas a mano.

[AQUÍ se puede ver el análisis y justificación de la elección de la imagen base](https://github.com/ByteVictor/AnimeFLV-API/blob/master/docs/elecciondocker/elecciondocker.md)

La conclusión del análisis ha sido que la mejor imagen para seleccionar es la **14.14.0-stretch-slim**.

#### Docker-Hub

Se ha generado una imagen personalizada a partir de la imagen seleccionada anteriormente, esta imagen se puede consultar y descargar desde:

  - [Docker Hub](https://hub.docker.com/r/bytevictor/animeflv-api)
  - [Gestor de Paquetes de GitHub](https://github.com/users/ByteVictor/packages/container/package/dockertests)