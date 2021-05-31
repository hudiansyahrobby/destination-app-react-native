import { StackActions, useNavigation } from '@react-navigation/core';
import { QueryClient, useMutation } from 'react-query';
import { deleteCategoryById } from '../../API/categoryAPI';

const useDeleteCategory = () => {
  const queryClient = new QueryClient();
  const navigation = useNavigation();
  return useMutation(deleteCategoryById, {
    onSuccess: () => {
      queryClient.invalidateQueries('categories');
      navigation.dispatch(StackActions.replace('CategoryList'));
    },
  });
};

export default useDeleteCategory;
