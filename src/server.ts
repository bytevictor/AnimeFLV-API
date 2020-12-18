import { app } from './index';
import Etcd from 'node-etcd';

const default_port = 8080;
let port; // default port to listen

//Intentamos obtener los datos de la configuración distribuida
let etcd = new Etcd("127.0.0.1:2379");

etcd.get("port", port);

//Si no estuviera funcionando o no puede obtener el valor de la variable, damos un valor por defecto
if(!port){

    port = default_port;
}


app.listen( port, () => {
    console.log( `server started at http://localhost:${ port }` );
} );
