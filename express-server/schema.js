const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Query {
    owners: [Owner]
    players(freeAgents: Boolean): [Player]
    player(id: Int): Player
    owner(id: Int): Owner
  }

  type Mutation {
    draft(ownerId: Int!, playerId: Int!): Boolean
  }

  type Player {
    id: Int
    name: String
    nflTeam: String
    position: String
    rank: Int
    bye: String
    owner: Owner
  }

  type Owner {
    id: Int
    teamName: String
    players: [Player]
  }
`;

module.exports = { typeDefs };
