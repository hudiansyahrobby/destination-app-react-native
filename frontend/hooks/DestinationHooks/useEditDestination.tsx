import { useMutation } from 'react-query';
import { editDestination } from '../../API/DestinationAPI';

const useEditDestination = () => {
  return useMutation(() => editDestination('5'));
};

export default useEditDestination;
