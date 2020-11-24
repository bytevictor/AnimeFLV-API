import { NowRequest, NowResponse } from '@vercel/node'
import Usuario from '../usuario'; 

import * as datos from './database.json';

export default (request: NowRequest, response: NowResponse) => {
  var serie = request.query['serie'];
  

  let usuario = new Usuario('api');

  response.status(200).send(`Hello ${datos}!`)

  //usuario.anadirSerie()
}