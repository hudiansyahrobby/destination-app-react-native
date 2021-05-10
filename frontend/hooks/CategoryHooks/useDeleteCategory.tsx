import { QueryClient, useMutation } from 'react-query';
import { deleteCategoryById } from '../../API/categoryAPI';

const useDeleteCategory = () => {
  const queryClient = new QueryClient();
  return useMutation(deleteCategoryById, {
    onSuccess: () => {
      queryClient.invalidateQueries('categories');
    },
  });
};

export default useDeleteCategory;
