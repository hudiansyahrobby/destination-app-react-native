import { useMutation } from 'react-query';
import { refreshToken } from '../../API/AuthAPI';

const useRefreshToken = () => {
  return useMutation(refreshToken);
};

export default useRefreshToken;
