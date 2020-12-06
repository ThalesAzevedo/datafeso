import axios from 'axios';

export const baseURL = 'https://datafeso-api.herokuapp.com';

const api = axios.create({
  baseURL,
});

export default api;
