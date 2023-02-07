# Block Explorer
Create a real-time Ethereum block explorer in minutes with this repo and Astra Block.

## Getting Started
1. [Create an Astra account](https://astra.datastax.com/register)
2. [Request access to Astra Block](https://www.datastax.com/products/astra-block)
3. Create a `.env` file using the `.env.example` as an example
4. Set `NEXT_PUBLIC_GRAPHQL_ENDPOINT` to your Astra DB GraphQL endpoint
5. Set `API_ACCESS_TOKEN` to your Astra token
6. Install dependencies: `yarn install`
7. Start the app with `yarn start` (if you want to run the app in production mode) or `yarn dev` for hot reloading
8. View the running app at http://localhost:3000/

## Deployment
Deploy the app to Vercel using the button below:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fdatastax%2Fblock-explorer&env=API_ACCESS_TOKEN,NEXT_PUBLIC_GRAPHQL_ENDPOINT&envDescription=Astra%20API%20keys%20needed%20for%20the%20application&project-name=Astra%20Block%20Explorer)
