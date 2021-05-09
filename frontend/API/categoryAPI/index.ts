import { ICategory } from '../../types/CategoryType';
import axios from '../axios';

const addCategory = async (category: ICategory) => {
  const { data } = await axios.post('/categories', category);
  return data.data;
};

const getAllCategories = async () => {
  const { data } = await axios.get('/categories');
  return data.data;
};

const getCategoryById = async (id: string) => {
  const { data } = await axios.get(`/categories/${id}`);
  return data.data;
};

const updateCategoryById = async (id: string, category: ICategory) => {
  const { data } = await axios.put(`/categories/${id}`, category);
  return data.data;
};

const deleteCategoryById = async (id: string) => {
  const { data } = await axios.delete(`/categories/${id}`);
  return data.data;
};

export {
  addCategory,
  getAllCategories,
  getCategoryById,
  updateCategoryById,
  deleteCategoryById,
};
