import { useQuery } from 'react-query';
import { getAllUsers } from '../../API/UsersAPI';

const useUsers = () => {
  return useQuery('users', () => getAllUsers());
};

export default useUsers;
