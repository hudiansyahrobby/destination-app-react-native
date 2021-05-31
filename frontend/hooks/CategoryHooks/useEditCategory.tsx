import { StackActions, useNavigation } from '@react-navigation/core';
import { QueryClient, useMutation } from 'react-query';
import { updateCategoryById } from '../../API/categoryAPI';

const useEditCategory = () => {
  const navigation = useNavigation();
  const queryClient = new QueryClient();
  return useMutation(updateCategoryById, {
    onSuccess: () => {
      queryClient.invalidateQueries('categories');
      navigation.dispatch(StackActions.replace('CategoryList'));
    },
  });
};

export default useEditCategory;
