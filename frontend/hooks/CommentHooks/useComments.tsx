import { useQuery } from 'react-query';
import { getComments } from '../../API/CommentAPI';

const useComments = (destinationId: string) => {
  return useQuery(['comments', destinationId], () =>
    getComments(destinationId)
  );
};

export default useComments;
