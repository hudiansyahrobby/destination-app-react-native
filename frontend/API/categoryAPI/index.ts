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
  console.log('DATA CATEGORY', data);
  return data.data;
};

const updateCategoryById = async (category: any) => {
  console.log('CAT', category);
  const { data } = await axios.put(`/categories/${category.id}`, {
    name: category.name,
  });
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
