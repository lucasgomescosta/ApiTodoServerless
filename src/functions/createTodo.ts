import { APIGatewayProxyHandler } from "aws-lambda";
import { document } from "../utils/dynamodbClient";
import { v4 as uuidV4 } from "uuid";

interface ICreateTodo {
  id: string;
  user_id: string;
  title: string;
  done: boolean;
  deadline: Date;
}

export const handle: APIGatewayProxyHandler = async (event) => {
  const { userid: user_id } = event.pathParameters;
  const { title, deadline } = JSON.parse(event.body) as ICreateTodo;

  await document
    .put({
      TableName: "todo",
      Item: {
        id: uuidV4(),
        user_id,
        title,
        done: false,
        deadline: new Date(deadline),
      },
    })
    .promise();

  return {
    statusCode: 201,
    body: JSON.stringify({
      message: "Created.",
    }),
    headers: {
      "Content-Type": "application/json",
    },
  };
};
