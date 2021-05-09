import { useMutation } from 'react-query';
import { updateCategoryById } from '../../API/categoryAPI';
import { ICategory } from '../../types/CategoryType';

const useEditCategory = (categoryId: string, category: ICategory) => {
  return useMutation(() => updateCategoryById(categoryId, category));
};

export default useEditCategory;
