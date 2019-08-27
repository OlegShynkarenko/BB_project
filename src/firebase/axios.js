import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://bb-app-4cc39.firebaseio.com/'
});

export default instance;