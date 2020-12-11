import Usuario from './usuario'
import express from "express"
import Serie from './serie';

const app = express();
const port = 8080; // default port to listen
 
//PARA LOS PARAMETROS DEL POST
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

//Creamos un usuario
let usuario_server = new Usuario('server', 'infraestructura virtual')

//Añade un capitulo a la serie 
app.put( "/anadircapitulo/:nombreserie/:linkcapitulo", ( req, res ) => {
    res.send( "Hello world!" );
} );

//Borra el capitulo numero de la serie
app.delete( "/borrarcapitulo/:nombreserie/:numerocapitulo", ( req, res ) => {
    res.send( "Hello world!" );
} );

//Devuelve el link del capitulo de la serie
app.get( "/getcapitulo/:nombreserie/:numerocapitulo", ( req, res ) => {
    res.send( "Hello world!" );
} );

//Construye una serie con los datos y la añade
//La descripcion y el link se obtienen de los parametros post
app.post( "/anadirserie/:nombreserie", ( req, res ) => {

    let nombreserie = req.params.nombreserie
    let descripcion = req.body.descripcion;
    let link = req.body.link;

    //Vemos si estan vacios
    if( nombreserie && descripcion && link ){
        let nueva_serie = new Serie( nombreserie, descripcion, link);

        try{
            usuario_server.anadirSerie(nueva_serie);
            res.send( {"OK": nombreserie } );
        } catch (error){
            res.status(400).send( error.message )
        }
        
    } else {
        res.status(400).send("Parametros Invalidos")
    }
    
} );

//Borra la serie
app.delete( "/borrarserie/:nombreserie", ( req, res ) => {
    res.send( "Hello world!" );
} );

//Devuelve una serie con toda la informacion asociada
app.get( "/getserie/:nombreserie", ( req, res ) => {
    res.send( "Hello world!" );
} );

app.get( "/holamundo", ( req, res ) => {
    res.send( "Hello world!" );
} );

app.listen( port, () => {
    console.log( `server started at http://localhost:${ port }` );
} );