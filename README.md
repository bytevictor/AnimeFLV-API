![badgetravis](https://img.shields.io/travis/com/bytevictor/animeflv-api?label=Travis&style=for-the-badge) <img align="right" src="https://img.shields.io/circleci/build/github/bytevictor/AnimeFLV-API?label=CircleCI&style=for-the-badge">

![](https://img.shields.io/github/milestones/progress-percent/bytevictor/animeflv-api/1?style=flat-square) ![](https://img.shields.io/github/milestones/progress-percent/bytevictor/animeflv-api/2?style=flat-square) ![](https://img.shields.io/github/milestones/progress-percent/bytevictor/animeflv-api/3?style=flat-square) ![](https://img.shields.io/github/milestones/progress-percent/bytevictor/animeflv-api/4?style=flat-square) ![](https://img.shields.io/github/milestones/progress-percent/bytevictor/animeflv-api/5?style=flat-square) ![](https://img.shields.io/github/milestones/progress-percent/bytevictor/animeflv-api/6?style=flat-square)

# AnimeFLV-API              	(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧

Este proyecto tiene como objetivo crear una API para interactuar con la web de anime, AnimeFLV de forma sencilla y automatizada.

## Motivación del proyecto 🦾

Como seguidor del anime y activo usuario de esta web, me he visto en más de una ocasión refrescando una y otra vez la página para ver si había salido ya un nuevo capítulo de cualquiera fuera la serie que seguía en ese momento o pasando por 4 links diferentes para descargar algún capítulo.
### ¿Qué se pretende desarrollar? 👨🏻‍💻
El objetivo es automatizar las tareas anteriormente comentadas, en un principio los objetivos son:

 - Crear funciones para marcar series y que se puedan recibir notificaciones cuando haya un nuevo capítulo.
 - Crear funciones que notifiquen la aparición de una nueva serie.
 - Crear funciones que faciliten la descarga automatizada de capítulos.

## Sistemas serverless

Se ha hecho uso de dos sistemas serverless para llevar a cabo el despliegue de algunas funciones del proyecto.

La conexión de ambos sistemas con el repositorio se puede consultar [en la siguiente documentación](https://github.com/bytevictor/AnimeFLV-API/blob/master/docs/sistemas_serverless/README.md)

- #### Vercel

    Después de conectar el sistema con nuestro repositorio hemos partido del siguiente [Código de ejemplo](https://vercel.com/docs/serverless-functions/supported-languages#using-typescript)
    Para comprobar que funciona, el test inicial está funcionando [AQUÍ](https://anime-flv-api.bytevictor.vercel.app/api/hola)

    Tras comprobar el funcionamiento de Vercel hemos desplegado una función que sirve para consultar si el sistema tiene una serie, si la tiene nos devuelve toda la información relativa a la misma, sinopsis, carátula, link y todos los links a los capitulos de la serie.

    [El código puede verse AQUÍ](https://github.com/bytevictor/AnimeFLV-API/blob/master/src/api/consultor.ts)

    [La función puede probarse AQUÍ](https://anime-flv-api.vercel.app/api/consultor?serie=Boku%20no%20Hero%20Academia)

- #### Netlify [![Netlify Status](https://api.netlify.com/api/v1/badges/01287280-7d0a-4910-9251-ebfbf2e92936/deploy-status)](https://app.netlify.com/sites/animeflv-api/deploys)


## Documentos

- [Documentación de la Integración Continua](https://github.com/ByteVictor/AnimeFLV-API/blob/master/docs/integracioncontinua/ci.md)

- [Documentación de Docker, imágenes y DockerHub](https://github.com/ByteVictor/AnimeFLV-API/blob/master/docs/doc_docker/docker.md)

- [Información sobre tests y cómo testear el proyecto](https://github.com/bytevictor/AnimeFLV-API/blob/master/docs/tests/tests.md)

- [Herramientas de desarrollo 🧰](https://github.com/bytevictor/AnimeFLV-API/blob/master/docs/herramientas/herramientas.md)

- [Primera aproximación al código](https://github.com/ByteVictor/AnimeFLV-API/blob/master/src/serie.ts)
Algunos atributos no cuentan con setter debido a que no se contempla que puedan cambiar después de construirse el objeto, si en un futuro son necesarios se añadirán.

- Ver los [PASOS 🦶](https://github.com/ByteVictor/AnimeFLV-API/blob/master/docs/pasos/pasos.md) a realizar 

- Ver [Historias de Usuario📚](https://github.com/ByteVictor/AnimeFLV-API/blob/master/docs/historias_usuario/historiasdeusuario.md )

- La configuración inicial de github puede verse [AQUÍ](https://github.com/ByteVictor/AnimeFLV-API/blob/master/docs/configuracion_inicial/configuracion_inicial.md)

## Autor
[Víctor González Argudo / ByteVictor](https://github.com/ByteVictor) 