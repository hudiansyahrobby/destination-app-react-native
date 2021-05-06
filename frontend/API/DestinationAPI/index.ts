import axios from '../axios';

const addDestination = async () => {
  await axios.post('/destinations');
};

const getAllDestinations = async () => {
  await axios.get('/destinations');
};

const getDestination = async (id: string) => {
  await axios.get(`/destinations/${id}`);
};

const editDestination = async (id: string) => {
  await axios.put(`/destinations${id}`);
};

const deleteDestination = async (id: string) => {
  await axios.delete(`/destinations${id}`);
};

export {
  getDestination,
  addDestination,
  getAllDestinations,
  editDestination,
  deleteDestination,
};
