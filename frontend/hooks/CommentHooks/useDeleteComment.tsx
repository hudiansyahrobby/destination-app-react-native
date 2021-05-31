import { StackActions, useNavigation } from '@react-navigation/core';
import { QueryClient, useMutation } from 'react-query';
import { deleteComment } from '../../API/CommentAPI';

const useDeleteComment = () => {
  const queryClient = new QueryClient();
  const navigation = useNavigation();

  return useMutation(deleteComment, {
    onSuccess: (data) => {
      queryClient.invalidateQueries('comments');
      queryClient.invalidateQueries('destinations');
      navigation.dispatch(
        StackActions.replace('Detail', {
          headerTitle: 'Detail',
          itemId: data.productId,
        })
      );
    },
  });
};

export default useDeleteComment;
