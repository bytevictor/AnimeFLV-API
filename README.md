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

## Microservicio

Hemos elegido express.js como framework para el microservicio, esta decisión se debe a que era un framework con mucha documentación para el lenguaje utilizado (typescript) y que cuenta con muchas facilidades pero a su vez es bastante versatil lo que lo hace un framework adecuado para el objetivo a realizar, además cuenta con todos los métodos necesarios para nuestra API.

[Fichero que implementa el microservicio index.ts](https://github.com/bytevictor/AnimeFLV-API/blob/master/src/index.ts).

En este fichero hemos empleado express.js e implementado varias rutas para las distintas funcionalidades de la API.
Siempre que una petición es correcta devuelve datos en formato JSON, ya sea confirmando, por ejemplo, que los datos introducidos son correctos en el caso de las peticiones PUT, POST y DELETE (y además mostrando esos datos en JSON) o devolviendo los datos solicitados en formato JSON en el caso de las peticiones de tipo GET.
Cuando la petición es incorrecta devuelve un mensaje de texto plano con la razón del error, además de devolver el código HTTP asociado al error. 

Las rutas disponibles son las siguientes:

**POST**

Añade una nueva serie al microservicio (los parametros descripcion y link se obtienen por )
> localhost:8080/anadirserie/:nombreserie

**GET** 

Devuelve una serie con toda su información asociada

> localhost:8080/getserie/:nombreserie

**GET**

Devuelve el link de un capítulo de una serie

> localhost:8080/getcapitulo/:nombreserie/:numcapitulo

**PUT**

Añade un capítulo a una serie 

> localhost:8080/anadircapitulo/:nombreserie/:numcapitulo/:linkcapitulo

**DELETE**

Borra un capítulo de una serie

> localhost:8080/borrarcapitulo/:nombreserie/:numcapitulo

**DELETE**

Borra una serie del microservicio

> localhost:8080/borrarserie/:nombreserie

Todas estas funcionalidades avanzan significativamente concretamente DOS de las historias de usuario, la HU01 y HU03, obtención de datos de series y capítulos de las mismas y la posibilidad de descargar series y capítulos, la HU01 está prácticamente implementada con este microservicio aunque aún puede mejorarse y esta funcionalidad facilita mucho la posibilidad de descargar capítulos ya que se pueden obtener fácilmente listas con los links a los mismos, en un futuro podría implementarse una funcionalidad que permita a partir de esos links que proporciona la API la descarga automatizada de capítulos.

### Middleware

Además de las funcionalidades del microservicio se ha implementado un middleware que almacena todas las peticiones que recibe el microservicio en un archivo log.txt.
Al ser un middleware es capaz de acceder a la instancia de express y ejecutar su código cada vez que esta recibe una petición de cualquier tipo.
Este middleware crea una carpeta en la raiz del proyecto llamada log donde almacena el archivo logs.txt, crea una carpeta porque es la forma común de almacenar logs ya que suelen ser ficheros de gran tamaño y puede necesitarse crear varios cuando uno alcanza demasiado tamaño, aunque en este caso todo aún se almacena en el mismo fichero.
Cada entrada del log almacena fecha, hora, metodo de la petición, url y el código de estado que devuelve.

Ejemplo entrada de log:

> [2020-12-12 2:17:47] GET:/getserie/Fairy%20Tail 200

El código del middleware se ha implementado en el mismo fichero que el resto del microservicio.

[Código implementación del sistema de logs (middleware) Lineas 19-58](https://github.com/bytevictor/AnimeFLV-API/blob/master/src/index.ts)

### Tests

Se han implementado tests para todas las rutas del microservicio, los cuales comprueban el correcto funcionamiento de este.

Para mandar las peticiones al microservicio se ha empleado la biblioteca supertest, ya que había mucha documentación asociada a esta con express y además se puede usar una biblioteca de aserciones propia, una de las recomendadas era mocha/chai que es la misma que usamos en el resto de los tests, por tanto nos venía como anillo al dedo.

[El código de los tests se puede comprobar AQUÍ](https://github.com/bytevictor/AnimeFLV-API/blob/master/tests/index.spec.js)

## Documentos

- [Documentación de los Sistemas Serverless]()

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