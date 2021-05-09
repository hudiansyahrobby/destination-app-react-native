import { useQuery } from 'react-query';
import { getMyProfile } from '../../API/UsersAPI';

const useMyProfile = () => {
  return useQuery('profile', getMyProfile);
};

export default useMyProfile;
