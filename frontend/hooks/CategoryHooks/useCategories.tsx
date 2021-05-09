import { useQuery } from 'react-query';
import { getAllCategories } from '../../API/categoryAPI';

const useCategories = () => {
  return useQuery('categories', getAllCategories);
};

export default useCategories;
