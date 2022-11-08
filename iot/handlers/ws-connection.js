import { SSMClient, PutParameterCommand } from '@aws-sdk/client-ssm'

const client = new SSMClient()

export async function handleEvent (event, context) {
  const connectionId = event.requestContext.connectionId

  const command = new PutParameterCommand(
    { Name: 'connection_id', Value: connectionId, Overwrite: true, Type: 'String' }
  )

  const responseSSM = await client.send(command)

  return {
    statusCode: responseSSM.$metadata.httpStatusCode,
    body: JSON.stringify({ connectionId })
  }
}
