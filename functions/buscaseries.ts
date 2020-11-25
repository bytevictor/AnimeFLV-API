import { APIGatewayEvent, Context } from 'aws-lambda'

import * as datos from '../src/api/database.json';

export async function handler (
  event: APIGatewayEvent,
  context: Context
) {

  var respuesta = {}

  for( let i in datos.series){
    respuesta['titulo'] = datos.series[i]['titulo'];
  }

  if(Object.keys(respuesta).length === 0){
    respuesta['error'] = "No hay series";
  }

  return {
    statusCode: 200,
     headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify( respuesta )
  }
}