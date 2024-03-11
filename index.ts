import express from 'express';
import axios from 'axios';
import { ApolloServer } from 'apollo-server-express';
import resolvers from './resolvers';
import typeDefs from './schema';

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const app = express();

server.applyMiddleware({ app });

app.get('/films', async (req, res) => {
  const response = await axios.get('https://ghibliapi.dev/films');
  res.json(response.data);
});

app.get('/people', async (req, res) => {
  const response = await axios.get('https://ghibliapi.dev/people');
  res.json(response.data);
});

app.listen(3000, () => {
  console.log('API is listening on port 3000');
});



app.listen(3000, () => {
  console.log('API is listening on port 3000');
  console.log('GraphQL playground is available at http://localhost:3000/graphql');
});