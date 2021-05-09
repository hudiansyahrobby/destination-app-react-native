import { useMutation } from 'react-query';
import { addCategory } from '../../API/categoryAPI';

const useAddCategory = () => {
  return useMutation(addCategory);
};

export default useAddCategory;
