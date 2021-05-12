import { useInfiniteQuery } from 'react-query';
import { getAllUsers } from '../../API/UsersAPI';

const useUsers = () => {
  return useInfiniteQuery('users', () => getAllUsers(), {
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

export default useUsers;
