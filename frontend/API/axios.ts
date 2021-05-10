import axios from 'axios';
import { store } from '../redux/stores';

const fetchClient = () => {
  const { user } = store.getState().user;
  const token = (user as any).token;
  console.log('TOKEN', token);
  let instance = axios.create({
    baseURL: 'http://192.168.1.15:8080/api/v1',
    headers: {
      Authorization: token ? `Bearer ${token}` : null,
    },
  });

  return instance;
};

export default fetchClient();
