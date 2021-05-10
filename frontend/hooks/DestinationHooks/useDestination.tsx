import { useQuery } from 'react-query';
import { getDestination } from '../../API/DestinationAPI';

const useDestination = (destinationId: string) => {
  console.log('DEST ID', destinationId);
  return useQuery(['destination', destinationId], () =>
    getDestination(destinationId)
  );
};

export default useDestination;
