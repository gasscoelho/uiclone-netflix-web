import axios from 'axios';
import { baseURL } from './TMDb/config';

const api = axios.create({
  baseURL,
});

const token = process.env.REACT_APP_API_TOKEN;

api.defaults.headers.authorization = `Bearer ${token}`;

export default api;
