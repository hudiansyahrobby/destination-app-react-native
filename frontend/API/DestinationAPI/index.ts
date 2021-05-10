import { IDestination } from '../../types/DestinationType';
import axios from '../axios';

const addDestination = async (destination: FormData) => {
  console.log('DEST', destination);
  const { data } = await axios.post('/products', destination);
  return data.data;
};

const addBulkDestinations = async (destinations: IDestination[]) => {
  await axios.post('/products/create-bulk', destinations);
};

const getAllDestinations = async () => {
  const { data } = await axios.get('/products');
  return data;
};

const getDestination = async (id: string) => {
  const { data } = await axios.get(`/products/${id}`);
  return data.data;
};

const editDestination = async (id: any, ...destination: any) => {
  const { data } = await axios.put(`/products/${id}`, destination);
  return data.data;
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
