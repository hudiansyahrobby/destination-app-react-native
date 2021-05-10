import axios from 'axios';
import { store } from '../redux/stores';

const fetchClient = () => {
  let instance = axios.create({
    baseURL: 'http://192.168.1.15:8080/api/v1',
  });

  instance.interceptors.request.use(function (config) {
    const { user } = store.getState().user;
    console.log('USERKU', user);
    const token = (user as any).token;
    console.log('TOKEN', token);
    config.headers.Authorization = token ? `Bearer ${token}` : null;
    return config;
  });

  return instance;
};

export default fetchClient();
