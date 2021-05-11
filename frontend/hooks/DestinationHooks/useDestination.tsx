import { useQuery } from 'react-query';
import { getDestination } from '../../API/DestinationAPI';

const useDestination = (destinationId: string) => {
  return useQuery(['destination', destinationId], () =>
    getDestination(destinationId)
  );
};

export default useDestination;
