import { useMutation } from 'react-query';
import { deleteDestination } from '../../API/DestinationAPI';

const useDeleteDestination = (id: string) => {
  return useMutation(() => deleteDestination(id));
};

export default useDeleteDestination;
