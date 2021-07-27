# Serverless - AWS Node.js Typescript

This project has been generated using the `aws-nodejs-typescript` template from the [Serverless framework](https://www.serverless.com/).

For detailed instructions, please refer to the [documentation](https://www.serverless.com/framework/docs/providers/aws/).

## Installation/deployment instructions

Depending on your preferred package manager, follow the instructions below to deploy your project.

> **Requirements**: NodeJS `lts/fermium (v.14.15.0)`. If you're using [nvm](https://github.com/nvm-sh/nvm), run `nvm use` to ensure you're using the same Node version in local and in your lambda's run time.

### Using NPM

- Run `npm i` to install the project dependencies
- Run `npx sls deploy` to deploy this stack to AWS

### Using Yarn

- Run `yarn` to install the project dependencies
- Run `yarn sls deploy` to deploy this stack to AWS

### Starting DynamoDB
- RUN `yarn dynamo:start`

### Starting Local DEV
- RUN `yarn dev` 
 
## Template features

### Project structure

The project code base is mainly located within the `src` folder. This folder is divided in:

- `functions` - containing code base and configuration for your lambda functions
- `libs` - containing shared code base between your lambdas

```
.
├── src
│   ├── functions               # Lambda configuration and source code folder
│   │   ├── createTodo
│   │   │   ├── handler.ts      # `/todos/{userid}` Essa rota deve receber o id de │   │   │   ├ um usuário pelo pathParameters (você pode criar esse id 
│   │   │   ├ manualmente apenas para preencher o campo) e os seguintes 
│   │   │   ├ campos no corpo da requisição: 
│   │   │   ├ title e deadline, onde deadline é a data limite para o todo.
│   │   ├── verifyTodo
│   │   │   ├── handler.ts      # `/todos/{userid}` A rota deve retornar os todos │   │   │   ├── que possuírem o user_id igual ao id recebido pelos parâmetros.
│
├── package.json
├── serverless.ts               # Serverless service file
├── tsconfig.json               # Typescript compiler configuration
├── tsconfig.paths.json         # Typescript paths
└── webpack.config.js           # Webpack configuration
```
