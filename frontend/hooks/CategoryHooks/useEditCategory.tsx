import { useNavigation } from '@react-navigation/core';
import { QueryClient, useMutation } from 'react-query';
import { updateCategoryById } from '../../API/categoryAPI';

const useEditCategory = () => {
  const navigation = useNavigation();
  const queryClient = new QueryClient();
  return useMutation(updateCategoryById, {
    onSuccess: () => {
      queryClient.invalidateQueries('categories');
      navigation.navigate('CategoryList');
    },
  });
};

export default useEditCategory;
