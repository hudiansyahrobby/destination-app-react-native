import { QueryClient, useMutation } from 'react-query';
import { editComment } from '../../API/CommentAPI';

const useEditComment = () => {
  const queryClient = new QueryClient();

  return useMutation(editComment, {
    onSuccess: () => {
      queryClient.invalidateQueries('comments');
    },
  });
};

export default useEditComment;
