import { APIGatewayProxyHandler } from "aws-lambda";
import { document } from '../utils/dynamodbClient';


export const handle: APIGatewayProxyHandler = async (event) => {
  const { userid: user_id } = event.pathParameters;

  const response = await document
    .scan({
      TableName: "todo",
      FilterExpression: "user_id = :user_id",
      ExpressionAttributeValues: {
        ":user_id": user_id,
      },
    })
    .promise();
  
  const userTodo = response.Items[0];

  if (userTodo) {
    return {
      statusCode: 200,
      body: JSON.stringify({
        userTodo: response.Items,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    };
  }

  return {
    statusCode: 400,
    body: JSON.stringify({
      message: "User does not exists!",
    }),
    headers: {
      "Content-Type": "application/json",
    },
  };
}