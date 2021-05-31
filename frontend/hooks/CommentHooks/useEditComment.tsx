import { StackActions, useNavigation } from '@react-navigation/core';
import { QueryClient, useMutation } from 'react-query';
import { editComment } from '../../API/CommentAPI';

const useEditComment = () => {
  const queryClient = new QueryClient();
  const navigation = useNavigation();

  return useMutation(editComment, {
    onSuccess: (data) => {
      queryClient.invalidateQueries('comments');
      queryClient.invalidateQueries('destinations');
      console.log('DATA', data);
      navigation.dispatch(
        StackActions.replace('Detail', {
          headerTitle: 'Detail',
          itemId: data.productId,
        })
      );
    },
  });
};

export default useEditComment;
