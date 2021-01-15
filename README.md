![badgetravis](https://img.shields.io/travis/com/bytevictor/animeflv-api?label=Travis&style=for-the-badge) <img align="right" src="https://img.shields.io/circleci/build/github/bytevictor/AnimeFLV-API?label=CircleCI&style=for-the-badge">

![](https://img.shields.io/github/milestones/progress-percent/bytevictor/animeflv-api/1?style=flat-square) ![](https://img.shields.io/github/milestones/progress-percent/bytevictor/animeflv-api/2?style=flat-square) ![](https://img.shields.io/github/milestones/progress-percent/bytevictor/animeflv-api/3?style=flat-square) ![](https://img.shields.io/github/milestones/progress-percent/bytevictor/animeflv-api/4?style=flat-square) ![](https://img.shields.io/github/milestones/progress-percent/bytevictor/animeflv-api/5?style=flat-square) ![](https://img.shields.io/github/milestones/progress-percent/bytevictor/animeflv-api/6?style=flat-square) ![](https://img.shields.io/github/milestones/progress-percent/bytevictor/animeflv-api/7?style=flat-square)

# AnimeFLV-API              	(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧ 

Este proyecto tiene como objetivo crear una API para interactuar con la web de anime, AnimeFLV de forma sencilla y automatizada.

## Motivación del proyecto 🦾

Como seguidor del anime y activo usuario de esta web, me he visto en más de una ocasión refrescando una y otra vez la página para ver si había salido ya un nuevo capítulo de cualquiera fuera la serie que seguía en ese momento o pasando por 4 links diferentes para descargar algún capítulo.

### ¿Qué se pretende desarrollar? 👨🏻‍💻
El objetivo es automatizar las tareas anteriormente comentadas, en un principio los objetivos son:

 - Crear funciones para marcar series y que se puedan recibir notificaciones cuando haya un nuevo capítulo.
 - Crear funciones que notifiquen la aparición de una nueva serie.
 - Crear funciones que faciliten la descarga automatizada de capítulos. 

## Despligue en la nube, PaaS

**Justificación**

Se ha elegido Heroku como sistema para desplegar la aplicación en PaaS.

Esta decisión se ha basado en las siguientes razones, en un primer lugar se han buscado servicios PaaS compatibles con node o preferiblemente dedicado, muchos de ellos se han descartado automáticamente al ser de pago.
Tras ver varias documentaciones de distintos servicios, la decisión quedó entre Heroku y Openshift, ya que ambos tenían documentación disponible para el lenguaje en el que está desarrollado el microservicio (node.js). Al investigar más en profundidad la documentación, características y opiniones de ambos servicios, Heroku quedó como la mejor opción por varias características.

En primer lugar cuenta con una documentación muy clara y sencilla, además de una muy buena integración con GitHub, Openshift también la tiene pero la de Heroku es mas sencilla y automatizada, además de esto Heroku cuenta con documentación oficial centrada en el uso de no solo node, si no grunt, ambos de los sistemas que se emplean en este proyecto para desarrollar y desplegar el microservicio, por tanto era mejor opción en casi todas ramas respecto a Openshift para nuestro caso.

El despliegue en Heroku ha sido muy sencillo, al igual que en otros servicios similares se ha creado una cuenta y se ha enlazado con la cuenta de github, ya que, como hemos comentado, heroku cuenta con integración con la plataforma.

![](docs/paas/img/app.png)

![](docs/paas/img/conectado.png)

**Despliegue automático**

De nuevo, Heroku tiene una muy buena integración con github y toda la configuración para el despligue automático viene preconfigurada y no es necesario ni configurar un webhook a mano, consiste en darle al siguiente botón en la sección de configuración. 

De este modo, el sistema detecta cada vez que se realiza un push en el repositorio, reconstruye y despliega de nuevo el microservicio, además se ha optado por activar la opción que nos aporta Heroku para que espere a que los sistemas de integración continua pasen correctamente los tests antes de hacer un nuevo despligue para asegurarnos de que siempre habrá un despligue funcionando.

![](docs/paas/img/despliegue_autom.png)

**Link al microservicio desplegado**

https://animeflv-api.herokuapp.com/status

Ninguna de las rutas de la api devuelve un status 500

Las distintas rutas de la api se pueden comprobar en la [Documentacion de la API del anterior hito](https://github.com/bytevictor/AnimeFLV-API/tree/master/docs/microservicio#microservicio-con-expressjs) 

## Documentos

- [Documentación del microservicio](https://github.com/bytevictor/AnimeFLV-API/tree/master/docs/microservicio)

- [Documentación de los Sistemas Serverless](https://github.com/bytevictor/AnimeFLV-API/tree/master/docs/sistemas_serverless)

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