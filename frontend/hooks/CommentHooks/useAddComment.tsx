import { useMutation } from 'react-query';
import { addComment } from '../../API/CommentAPI';

const useAddComment = () => {
  return useMutation(() => addComment('5'));
};

export default useAddComment;
