import { useMutation } from 'react-query';
import { deleteDestination } from '../../API/DestinationAPI';

const useDeleteDestination = () => {
  return useMutation(() => deleteDestination('5'));
};

export default useDeleteDestination;
