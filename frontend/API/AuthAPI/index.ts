import axios from '../axios';

const signup = async () => {
  await axios.post('/signup');
};

const login = async () => {
  await axios.post('/login');
};

const refreshToken = async () => {
  await axios.post('/refresh-token');
};

const logout = async () => {
  await axios.post('/logout');
};

export { signup, login, refreshToken, logout };
