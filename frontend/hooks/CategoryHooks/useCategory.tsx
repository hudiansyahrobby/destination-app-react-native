import { useQuery } from 'react-query';
import { getCategoryById } from '../../API/categoryAPI';

const useCategory = (categoryId: string) => {
  return useQuery(['categories', categoryId], () =>
    getCategoryById(categoryId)
  );
};

export default useCategory;
