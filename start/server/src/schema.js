// ./server/src/schema.js
const { gql } = require('apollo-server');

const typeDefs = gql`
  # schema goes here:
  type Query {
    launches: [Launch]!
    launch(id: ID!): Launch
    # queries for current user:
    me: User
  }

  type Launch {
    id: ID!
    site: String
    mission: Mission
    rocket: Rocket
    isBooked: Boolean!
  }

  type Rocket {
    id: ID!
    name: String
    type: String
  }

  type User {
    id: ID!
    email: String
    trips: [Launch]!
  }

  type Mission {
    name: String
    missionPatch(size: PatchSize): String
  }

  enum PatchSize {
    SMALL
    LARGE
  }
`;

module.exports = typeDefs;