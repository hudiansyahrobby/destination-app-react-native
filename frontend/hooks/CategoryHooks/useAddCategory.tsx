import { useNavigation } from '@react-navigation/core';
import { useMutation, useQueryClient } from 'react-query';
import { addCategory } from '../../API/categoryAPI';

const useAddCategory = () => {
  const queryClient = useQueryClient();
  const navigation = useNavigation();

  return useMutation(addCategory, {
    onSuccess: () => {
      queryClient.invalidateQueries('categories');
      navigation.navigate('CategoryList');
    },
  });
};

export default useAddCategory;
