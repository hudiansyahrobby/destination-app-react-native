import { useMutation } from 'react-query';
import { editDestination } from '../../API/DestinationAPI';
import { IDestination } from '../../types/DestinationType';

const useEditDestination = (id: string, destination: IDestination) => {
  return useMutation(() => editDestination(id, destination));
};

export default useEditDestination;
