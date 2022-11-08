import { SSMClient, PutParameterCommand } from '@aws-sdk/client-ssm'

const client = new SSMClient()
const command = new PutParameterCommand({ Name: 'connection_id', Value: '' })
const response = await client.send(command)
