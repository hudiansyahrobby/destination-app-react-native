import { StackActions, useNavigation } from '@react-navigation/core';
import { QueryClient, useMutation } from 'react-query';
import { addComment } from '../../API/CommentAPI';

const useAddComment = () => {
  const queryClient = new QueryClient();
  const navigation = useNavigation();

  return useMutation(addComment, {
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

export default useAddComment;
