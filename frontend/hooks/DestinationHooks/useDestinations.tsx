import { useQuery } from 'react-query';
import { getAllDestinations } from '../../API/DestinationAPI';

const useDestinations = () => {
  return useQuery('destinations', getAllDestinations);
};

export default useDestinations;
