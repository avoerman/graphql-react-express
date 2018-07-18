import { makeExecutableSchema } from 'graphql-tools';
import resolvers from './resolvers';

const typeDefs = `
type Query {
  user(email: String): User
  users: [User]
}

type User {
  name: String
  email: String
  password: String
  residence: String
  groups: [Group]!
}

type Group {
  name: String
  members: [User]!
}
`;

export default makeExecutableSchema({ typeDefs, resolvers });
