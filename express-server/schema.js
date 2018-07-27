import { gql } from 'apollo-server-core';

export const typeDefs = gql`
  type Query {
    player(id: Int): Player
    owner(id: Int): Owner
    players(freeAgents: Boolean): [Player]
    owners: [Owner]
  }

  type Player {
    id: Int
    name: String
    rank: Int
    owner: Owner
    position: String
    nflTeam: String
    bye: String
  }

  type Owner {
    id: Int
    teamName: String
    players: [Player]
  }
`;
