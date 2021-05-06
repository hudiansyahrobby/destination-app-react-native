import { useQuery } from 'react-query';
import { getDestination } from '../../API/DestinationAPI';

const useDestination = () => {
  return useQuery(['destination', 5], () => getDestination('5'));
};

export default useDestination;
