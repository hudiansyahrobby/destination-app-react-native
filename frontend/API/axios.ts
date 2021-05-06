import axios from 'axios';
import { API_BASE } from '@env';

const fetchClient = () => {
  // Create instance
  let instance = axios.create({
    baseURL: API_BASE,
    withCredentials: true,
  });

  return instance;
};

export default fetchClient();
