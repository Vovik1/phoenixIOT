import middy from '@middy/core'
import { Metrics, logMetrics } from '@aws-lambda-powertools/metrics'
import { Tracer, captureLambdaHandler } from '@aws-lambda-powertools/tracer'
import { Logger, injectLambdaContext } from '@aws-lambda-powertools/logger'
import { DynamoDBClient } from '@aws-sdk/client-dynamodb'
import { DynamoDBDocument } from '@aws-sdk/lib-dynamodb'
import { TABLE_NAME } from '../config.js'

const tracer = new Tracer()
const logger = new Logger()
const metrics = new Metrics()

const ddbClient = new DynamoDBClient()
const docClient = DynamoDBDocument.from(ddbClient)

async function handler (event, context) {

  return {
    statusCode: 200, body: JSON.stringify({message: "You are allrigth"})
  }
  // const params = {
  //   TableName: TABLE_NAME,
  //   KeyConditionExpression: 'plc_id = :id and #tmp between :t1 and :t2',
  //   ExpressionAttributeNames: {
  //     '#tmp': 'timestamp'
  //   },
  //   ExpressionAttributeValues: {
  //     ':id': '4',
  //     ':t1': '2021-03-04T16:57:50.204Z',
  //     ':t2': '2021-03-04T17:08:19.495Z'
  //   }
  // }



  // try {
  //   const data = await docClient.query(params)
  //   return { statusCode: 200, data }
  // } catch (err) {
  //   logger.error({ err })
  // }
}

export const handleEvent = middy(handler)
  .use(injectLambdaContext(logger, { logEvent: true }))
  .use(logMetrics(metrics))
  .use(captureLambdaHandler(tracer))
