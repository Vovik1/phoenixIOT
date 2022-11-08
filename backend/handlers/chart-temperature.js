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
  const params = {
    TableName: TABLE_NAME,
    KeyConditionExpression: 'plc_id = :id',
    ExpressionAttributeValues: {
      ':id': '1151412'
    },
    ScanIndexForward: false,
    Limit: 30
  }

  try {
    const result = await docClient.query(params)
    const data = result.Items.map((item) => {
      return {
        timestamp: item.timestamp,
        heater_temperature: item.data.HEATER_TEMPERATURE,
        tank_level: item.data.TANK_LEVEL
      }
    })

    const convertedResults = {
      timestamp: [],
      heater_temperature: [],
      tank_level: []
    }

    for (let i = 0; i < data.length; i++) {
      convertedResults.timestamp.push(data[i].timestamp)
      convertedResults.heater_temperature.push(data[i].heater_temperature)
      convertedResults.tank_level.push(data[i].tank_level)
    }

    return { statusCode: 200, data: convertedResults }
  } catch (err) {
    logger.error({ err })
  }
}

export const handleEvent = middy(handler)
  .use(injectLambdaContext(logger, { logEvent: true }))
  .use(logMetrics(metrics))
  .use(captureLambdaHandler(tracer))
