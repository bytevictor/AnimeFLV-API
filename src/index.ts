import Usuario from './usuario'
import express from "express"
import Serie from './serie';

const app = express();
const port = 8080; // default port to listen

//Para abrir ficheros para los logs
const fs = require('fs')
 
//PARA LOS PARAMETROS DEL POST
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

//Creamos un usuario
let usuario_server = new Usuario('server', 'infraestructura virtual')

//LOGGER MIDDLEWARE
let demoLogger = (req, res, next) => {
    let hora = new Date();
    let hora_bonita =
      hora.getFullYear() +
      "-" +
      (hora.getMonth() + 1) +
      "-" +
      hora.getDate() +
      " " +
      hora.getHours() +
      ":" +
      hora.getMinutes() +
      ":" +
      hora.getSeconds();
    let method = req.method;
    let url = req.url;
    let status = res.statusCode;

    let log = `[${hora_bonita}] ${method}:${url} ${status}`;
    console.log(log);

    //ruta para los logs
    let dir_logs = './log'
    //si no existe la ruta creala
    if (!fs.existsSync(dir_logs)){
        fs.mkdirSync(dir_logs);
    }

    fs.appendFile("./log/logs.txt", log + "\n", err => {
        if (err) {
          console.log(err);
        }
    });

    next();
};

//Le decimos a express que use la funcion middleware para crear logs
app.use(demoLogger)

//Esto sirve para poder mostrar el map con stringify, por defecto no lo hace
function replacer(key, value) {
    const originalObject = this[key];
    if(originalObject instanceof Map) {
      return {
        dataType: 'Map',
        value: Array.from(originalObject.entries()), // or with spread: value: [...originalObject]
      };
    } else {
      return value;
    }
}

function reviver(key, value) {
    if(typeof value === 'object' && value !== null) {
      if (value.dataType === 'Map') {
        return new Map(value.value);
      }
    }
    return value;
}

//Añade un capitulo a la serie 
app.put( "/anadircapitulo/:nombreserie/:numcapitulo/:linkcapitulo", ( req, res ) => {
    let nombreserie = req.params.nombreserie
    let numcap = req.params.numcapitulo
    let link = req.params.linkcapitulo

    //Vemos si esta vacio y si es un numero
    if( nombreserie && link && !isNaN(Number(numcap)) ){
        try{
            let serie = usuario_server.getSerie(nombreserie);

            serie.anadirCapitulo(Number(numcap),link);

            res.send( {"OK": numcap,link } );
        } catch (error){
            res.status(409).send( error.message )
        }
        
    } else {
        res.status(400).send("Parametros Invalidos")
    }
} );

//Borra el capitulo numero de la serie
app.delete( "/borrarcapitulo/:nombreserie/:numcapitulo", ( req, res ) => {
    let nombreserie = req.params.nombreserie
    let numcap = req.params.numcapitulo

    //Vemos si esta vacio y si es un numero
    if( nombreserie && !isNaN(Number(numcap)) ){
        try{
            let serie = usuario_server.getSerie(nombreserie);

            serie.borrarCapitulo(Number(numcap));

            res.send( {"DELETED": numcap } );
        } catch (error){
            res.status(409).send( error.message )
        }
        
    } else {
        res.status(400).send("Parametros Invalidos")
    }
} );

//Devuelve el link del capitulo de la serie
app.get( "/getcapitulo/:nombreserie/:numcapitulo", ( req, res ) => {
    let nombreserie = req.params.nombreserie
    let numcap = req.params.numcapitulo

    //Vemos si esta vacio y si es un numero
    if( nombreserie && !isNaN(Number(numcap))){
        try{
            let serie = usuario_server.getSerie(nombreserie);
            
            let link = serie.getLinkCapitulo(Number(numcap));

            res.send( {"numero":numcap,link} );
        } catch (error){
            res.status(409).send( error.message )
        }
        
    } else {
        res.status(400).send("Parametros Invalidos")
    }
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
            res.status(409).send( error.message )
        }
        
    } else {
        res.status(400).send("Parametros Invalidos")
    }
    
} );

//Borra la serie
app.delete( "/borrarserie/:nombreserie", ( req, res ) => {
    let nombreserie = req.params.nombreserie

    //Vemos si esta vacio
    if( nombreserie ){
        let serie_borrar = new Serie( nombreserie, "", "");

        try{
            usuario_server.borrarSerie(serie_borrar);
            res.send( {"DELETED": nombreserie } );
        } catch (error){
            res.status(409).send( error.message )
        }
        
    } else {
        res.status(400).send("Parametros Invalidos")
    }
} );

//Devuelve una serie con toda la informacion asociada
app.get( "/getserie/:nombreserie", ( req, res ) => {
    let nombreserie = req.params.nombreserie

    //Vemos si esta vacio
    if( nombreserie ){
        try{
            let serie = usuario_server.getSerie(nombreserie);
            //Al tener un map tenemos que hacer esto para poder mostrarlo ya que stringify no es capaz por si solo

            const str = JSON.stringify(serie.map_capitulos, replacer);
            const newValue = JSON.parse(str, reviver);

            console.log( newValue );

            res.send( JSON.stringify(serie));
        } catch (error){
            res.status(409).send( error.message )
        }
        
    } else {
        res.status(400).send("Parametros Invalidos")
    }
} );

app.get( "/holamundo", ( req, res ) => {
    res.send( "Hello world!" );
} );

var apps = app.listen( port, () => {
    console.log( `server started at http://localhost:${ port }` );
} );


export { app }