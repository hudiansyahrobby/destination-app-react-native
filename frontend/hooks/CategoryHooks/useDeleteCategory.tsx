import { useMutation } from 'react-query';
import { deleteCategoryById } from '../../API/categoryAPI';

const useDeleteCategory = (id: string) => {
  return useMutation(() => deleteCategoryById(id));
};

export default useDeleteCategory;
