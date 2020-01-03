// ./server/src/index.js
const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');

const server = new ApolloServer({ typeDefs });

server
  .listen()
  .then(({ url }) => {
    console.log(`App is up and running @ ${ url }`);
  });
