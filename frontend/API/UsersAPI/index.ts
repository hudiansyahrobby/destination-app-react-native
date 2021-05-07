import axios from '../axios';

const searchUsers = async (keyword: string) => {
  const { data } = await axios.get(`/user-profile/search/${keyword}`);
  return data.data;
};

const getAllUsers = async () => {
  const { data } = await axios.get('/user-profile');
  return data;
};

const getUserByUID = async (uid: string) => {
  const { data } = await axios.get(`/user-profile/${uid}`);
  return data.data;
};

export { searchUsers, getAllUsers, getUserByUID };
