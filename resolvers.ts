import axios from 'axios';

const resolvers = {
  Query: {
    getFilms: async () => {
      const response = await axios.get('https://ghibliapi.dev/films');
      return response.data;
    },
    getPeople: async () => {
      const response = await axios.get('https://ghibliapi.dev/people');
      return response.data;
    },
  },
};

export default resolvers;