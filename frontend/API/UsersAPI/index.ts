import axios from '../axios';

const searchUsers = async (keyword: string) => {
  console.log('KEYWORD', keyword);
  const { data } = await axios.get(`/user-profile/search/${keyword}`);
  console.log('USERS : ', data.data);
  return data.data;
};

const getAllUsers = async () => {
  const { data } = await axios.get('/user-profile');
  console.log('USERS : ', data.data);
  return data.data;
};

const getUserByUID = async (uid: string) => {
  const { data } = await axios.get(`/user-profile/${uid}`);
  console.log('USERS : ', data.data);
  return data.data;
};

export { searchUsers, getAllUsers, getUserByUID };
