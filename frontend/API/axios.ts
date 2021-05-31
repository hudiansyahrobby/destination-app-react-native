import axios from 'axios';
import { store } from '../redux/stores';

const fetchClient = () => {
  let instance = axios.create({
    baseURL: 'http://192.168.1.10:8080/api/v1',
  });

  instance.interceptors.request.use(function (config) {
    const { accessToken } = store.getState().user;
    config.headers.Authorization = accessToken ? `Bearer ${accessToken}` : null;
    return config;
  });

  instance.interceptors.response.use(
    (response) => response,
    (error) => {
      console.log(error);
      // Reject promise if usual error
      if (error.status !== 401) {
        return Promise.reject(error);
      }

      // return firebase
      //   .auth()
      //   .currentUser.getIdToken(true)
      //   .then((idToken: string) => console.log('TOKEN : ', idToken))
      //   .catch((error) => {
      //     console.log('ERROR : ', err);
      //   });

      // return instance
      //   .post('/auht/refresh_token', {
      //     refresh_token: this._getToken('refresh_token'),,
      //   })
      //   .then((response) => {
      //     saveToken();
      //     error.response.config.headers['Authorization'] =
      //       'Bearer ' + response.data.access_token;
      //     return axios(error.response.config);
      //   })
      //   .catch((error) => {
      //     destroyToken();
      //     this.router.push('/login');
      //     return Promise.reject(error);
      //   })
      //   .finally(createAxiosResponseInterceptor);
    }
  );

  return instance;
};

export default fetchClient();
