## Tests
Como hemos comentado anteriormente en el apartado de herramientas hemos seleccionado Mocha como framework para los tests.
Mocha al ser un framework tan ligero no incluye biblioteca de aserciones, así que debemos instalar una, en este caso hemos seleccionado la que parece ser la más utilizada junto con Mocha, **Chai**.
Para instalar ambos empleamos el gestor de paquetes:

>npm install

Con el anterior comando toda la aplicación debería quedar lista para ejecutar tests, pero se pueden ver [los pasos detallados AQUÍ](https://github.com/ByteVictor/AnimeFLV-API/tree/master/docs/instalacion_mochachai/mochchai.md)

La información sobre la instalación de Mocha y otros Frameworks se ha obtenido de [AQUÍ](https://medium.com/@RupaniChirag/writing-unit-tests-in-typescript-d4719b8a0a40)

### Para Ejecutar:
>npm run test

El resultado de la ejecución de los primeros tests se puede ver [AQUÍ](https://github.com/ByteVictor/AnimeFLV-API/blob/master/docs/tests/primeraejecucion.png)

### Código

Todo el código de los tests se añadirá al directorio [/tests](https://github.com/ByteVictor/AnimeFLV-API/tree/master/tests).
- El código de los primeros tests se puede consultar [AQUÍ](https://github.com/ByteVictor/AnimeFLV-API/blob/master/tests/serie.spec.ts)