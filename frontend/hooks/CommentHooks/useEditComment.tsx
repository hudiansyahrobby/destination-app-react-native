import { useMutation } from 'react-query';
import { editComment } from '../../API/CommentAPI';

const useEditComment = () => {
  return useMutation(() => editComment('5', '2'));
};

export default useEditComment;
