import { QueryClient, useMutation } from 'react-query';
import { deleteComment } from '../../API/CommentAPI';

const useDeleteComment = () => {
  const queryClient = new QueryClient();
  return useMutation(deleteComment, {
    onSuccess: () => {
      queryClient.invalidateQueries('comments');
      queryClient.invalidateQueries('destinations');
    },
  });
};

export default useDeleteComment;
