import { useQuery } from 'react-query';
import { getUserByUID } from '../../API/UsersAPI';

const useUser = (userId: string) => {
  return useQuery(['user', userId], () => getUserByUID(userId));
};

export default useUser;
