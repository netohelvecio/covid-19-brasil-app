import axios from 'axios';

const api = axios.create({
  baseURL: 'https://covid-19-data.p.rapidapi.com/',
  headers: {
    'x-rapidapi-key': '79beaafb9cmsh4bf4f580b79934cp1fdb05jsn255c8f69ae61',
  },
});

export default api;
