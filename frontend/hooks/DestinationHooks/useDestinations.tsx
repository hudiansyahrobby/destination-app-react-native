import { useInfiniteQuery } from 'react-query';
import { getAllDestinations } from '../../API/DestinationAPI';

const useDestinations = () => {
  return useInfiniteQuery('destinations', getAllDestinations, {
    getNextPageParam: (lastPage) => {
      const hasNextPage = lastPage.meta.currentPage < lastPage.meta.totalPages;
      if (hasNextPage) {
        return +lastPage.meta.currentPage;
      } else {
        return false;
      }
    },
  });
};

export default useDestinations;
