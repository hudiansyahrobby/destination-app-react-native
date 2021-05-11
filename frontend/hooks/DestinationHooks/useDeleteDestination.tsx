import { useMutation, useQueryClient } from 'react-query';
import { deleteDestination } from '../../API/DestinationAPI';

const useDeleteDestination = () => {
  const queryClient = useQueryClient();
  return useMutation(deleteDestination, {
    onSuccess: () => {
      queryClient.invalidateQueries('destinations');
    },
  });
};

export default useDeleteDestination;
