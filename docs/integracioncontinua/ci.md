## Integración Continua

Se han configurado dos sistemas de integración continua:

- #### Travis:
    Se ha escogido Travis como primer sistema de integración continua por varias razones, es gratis, es sencillo, está bien integrado en github, configurarlo es fácil y además era usado y recomendado por el profesor.

    Se ejecutan los tests en las siguientes versiones de node :

    - **Última versión estable:** Es importante comprobar que funciona en la versión mas nueva para seguir dándole soporte a la aplicación y mantenerla actualizada y/o detectar nuevos bugs o problemas de la versión a tiempo.

    - **Última versión LTS (Long Term Support):** Debido al soporte las versiones LTS son más utilizadas que la última versión estable, es importante testearla en la versión LTS más actualizada por las mismas razones que la última estable, pero además, porque probablemente sea la versión que mas gente utilice.

    - **14 versión local** en mi sistema con la que se ha desarrollado hasta ahora (esta debería funcionar siempre)

    - **11 versión mínima** de node, de este modo podemos ver si estamos incluyendo algo que haga que deje de funcionar en versiones más antiguas

    Se puede ver como se ha puesto en marcha travis en [los ejercicios del tema](https://github.com/bytevictor/EjerciciosIV/blob/master/H4/README.md)


    La configuración de Travis se puede ver en [el siguiente fichero](https://github.com/bytevictor/AnimeFLV-API/blob/master/.travis.yml)

- #### Circle-CI:
    Se ha escogido Circle-CI como segundo sistema de integración continua porque se buscaba un segundo sistema para ejecutar los tests empleando la imagen de Docker, CircleCI contaba con mucha documentación al respecto y parecía sencillo.
    La documentación que se ha empleado para la configuración es la siguiente:

    - [Cómo ejecutar una máquina de linux básica en circleci y ejecutar comandos](https://circleci.com/docs/2.0/examples-intro/#linux-with-machine)
    - [Cómo elegir y configurar una imagen para la máquina](https://circleci.com/docs/2.0/configuration-reference/#machine)

    Descargamos nuestra imagen de Docker Hub que ya subimos anteriormente y la ejecutamos en CircleCi utilizando las funcionalidades para docker que nos facilita CircleCi, dentro de la propia imagen montamos nuestro repositorio y ejecutamos los tests.

    La configuración final puede verse en [el siguiente fichero](https://github.com/bytevictor/AnimeFLV-API/blob/master/.circleci/config.yml)