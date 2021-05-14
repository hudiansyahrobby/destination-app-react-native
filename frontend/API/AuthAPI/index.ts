import { IUser } from '../../types/UserType';
import axios from '../axios';

const signup = async (registerData: IUser) => {
  console.log('REG', registerData);
  await axios.post('/auth/firebase-register', registerData);
};

const login = async (loginData: Pick<IUser, 'email' | 'password'>) => {
  const { data } = await axios.post('/auth/firebase-login', loginData);
  return data.data.user;
};

const loginGoogle = async () => {
  await axios.post('/auth/google-login');
};

const loginFacebook = async () => {
  await axios.post('/auth/facebook-login');
};

const refreshToken = async () => {
  await axios.post('/auth/refresh-token');
};

const logout = async () => {
  const { data } = await axios.post('/auth/logout');
  return data;
};

export { signup, login, refreshToken, logout, loginGoogle, loginFacebook };
