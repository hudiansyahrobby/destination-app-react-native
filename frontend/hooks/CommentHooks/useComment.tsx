import { useQuery } from 'react-query';
import { getComment } from '../../API/CommentAPI';

const useComment = (commentId: string) => {
  return useQuery(['comments', commentId], () => getComment(commentId));
};

export default useComment;
