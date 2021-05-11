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

const getMyProfile = async () => {
  const { data } = await axios.get('/user-profile/me');
  return data.data;
};

const updateMyProfile = async (updatedProfile: any) => {
  console.log('HAHA', updatedProfile);
  const { data } = await axios.put('/user-profile/me', updatedProfile);
  return data.data;
};

export {
  searchUsers,
  getAllUsers,
  getUserByUID,
  getMyProfile,
  updateMyProfile,
};
