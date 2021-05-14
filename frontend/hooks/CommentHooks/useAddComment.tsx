import { QueryClient, useMutation } from 'react-query';
import { addComment } from '../../API/CommentAPI';

const useAddComment = () => {
  const queryClient = new QueryClient();

  return useMutation(addComment, {
    onSuccess: () => {
      queryClient.invalidateQueries('comments');
      queryClient.invalidateQueries('destinations');
    },
  });
};

export default useAddComment;
