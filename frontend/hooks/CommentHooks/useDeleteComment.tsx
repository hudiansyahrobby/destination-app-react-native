import { useMutation } from 'react-query';
import { deleteComment } from '../../API/CommentAPI';

const useDeleteComment = () => {
  return useMutation(() => deleteComment('5'));
};

export default useDeleteComment;
