import { NowRequest, NowResponse } from '@vercel/node'
import Usuario from '../usuario'; 

import * as datos from './database.json';

export default (request: NowRequest, response: NowResponse) => {
  var serie = request.query['serie'];

  var respuesta = {};

  for( let i in datos.series){
    if( datos.series[i]['titulo'] == serie){
      respuesta['titulo']      = datos.series[i]['titulo']
      respuesta['descripcion'] = datos.series[i]['descripcion']
      respuesta['caratula']    = datos.series[i]['caratula']
      respuesta['link']        = datos.series[i]['link']
      respuesta['capitulos']   = datos.series[i]['capitulos']
    }
  }

  if(Object.keys(respuesta).length === 0){
    respuesta['error'] = "No se ha encontrado la serie"
  }

  let respuesta_json = JSON.stringify(respuesta);

  response.status(200).send(respuesta_json);
}
