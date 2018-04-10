import express from "express";
import bodyParser from "body-parser";
import { graphqlExpress, graphiqlExpress } from "apollo-server-express";
import schema from "./schema";

const myGraphQLSchema = schema;
const PORT = 4000;

const app = express();

app.use(
  "/graphql",
  bodyParser.json(),
  graphqlExpress({ schema: myGraphQLSchema })
);

app.get("/graphiql", graphiqlExpress({ endpointURL: "/graphql" }));

app.listen(PORT);
