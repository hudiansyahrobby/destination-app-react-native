import { useMutation } from 'react-query';
import { addDestination } from '../../API/DestinationAPI';

const useAddDestination = () => {
  return useMutation(addDestination);
};

export default useAddDestination;
