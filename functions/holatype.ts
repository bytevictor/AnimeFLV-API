import { APIGatewayEvent, Context } from 'aws-lambda'

export async function handler (
  event: APIGatewayEvent,
  context: Context
) {

  const { msg } = event.queryStringParameters

  return {
    statusCode: 200,
     headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ msg })
  }
}