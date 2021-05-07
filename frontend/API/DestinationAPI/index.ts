import { IDestination } from '../../types/DestinationType';
import axios from '../axios';

const addDestination = async (destination: IDestination) => {
  await axios.post('/products', destination);
};

const addBulkDestinations = async (destinations: IDestination[]) => {
  await axios.post('/products/create-bulk', destinations);
};

const getAllDestinations = async () => {
  const { data } = await axios.get('/products');
  return data?.data;
};

const getDestination = async (id: string) => {
  console.log('ID', id);
  const { data } = await axios.get(`/products/${id}`);
  console.log('HAHAHA', data.data);
  return data.data;
};

const editDestination = async (id: string, destination: IDestination) => {
  await axios.put(`/products/${id}`, destination);
};

const deleteDestination = async (id: string) => {
  await axios.delete(`/products/${id}`);
};

export {
  getDestination,
  addDestination,
  getAllDestinations,
  editDestination,
  deleteDestination,
  addBulkDestinations,
};
