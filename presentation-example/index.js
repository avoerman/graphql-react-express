import express from 'express';
import bodyParser from 'body-parser';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import cors from 'cors';
import schema from './schema';
import getAllUsers from './services/user-service';

const myGraphQLSchema = schema;
const PORT = 4000;

const app = express();

app.use(cors());

app.use(
  '/graphql',
  bodyParser.json(),
  graphqlExpress({ schema: myGraphQLSchema })
);
app.get('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

app.get('/groupMembers', async (req, res) => {
  const users = await getAllUsers();
  const projectedUsers = users
    .map(user => user.groups.map(group => ({
      name: group.name,
      members: group.members.map(member => ({
        name: member.name,
        email: member.email
      }))
    })));
  res.status(200);
  res.json(projectedUsers);
});

app.get('/groupNames/:userEmail', async (req, res) => {
  const users = await getAllUsers();
  const { userEmail } = req.params;
  const groups = users
    .filter(user => user.email === userEmail)
    .map(user => user.groups.map(group => ({
      name: group.name,
      members: group.members.map(member => ({
        name: member.name
      }))
    })));

  res.status(200);
  res.json(groups);
});


app.listen(PORT);
