import axios from 'axios';

const fetchClient = () => {
  let instance = axios.create({
    baseURL: 'http://192.168.1.15:8080/api/v1',
    // withCredentials: true,
  });

  return instance;
};

export default fetchClient();
