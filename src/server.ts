import { app } from './index';

const port = 8080; // default port to listen

app.listen( port, () => {
    console.log( `server started at http://localhost:${ port }` );
} );
