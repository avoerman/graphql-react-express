import { makeExecutableSchema } from "graphql-tools";
import resolvers from "./resolvers";

const typeDefs = `
type Query {
  player(firstName: String, lastName: String): Player
  owner(teamName: String): Owner
  players: [Player]
  owners: [Owner]
}

type Player {
  id: Int
  firstName: String
  lastName: String
  owner: Owner
}

type Owner {
  id: Int
  teamName: String
  players: [Player]
}
`;

export default makeExecutableSchema({ typeDefs, resolvers });
