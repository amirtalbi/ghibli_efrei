import { gql } from 'graphql-tag';

const typeDefs = gql`
  type Film {
    id: String!
    title: String!
    people: [People!]!
  }

  type People {
    id: String!
    name: String!
    eyeColor: String!
    films: [Film!]!
  }

  query {
    getFilms: [Film!]!
    getPeople: [People!]!
  }
`;

export default typeDefs;