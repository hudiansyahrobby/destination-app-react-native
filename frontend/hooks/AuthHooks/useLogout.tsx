import { useMutation } from 'react-query';
import { logout } from '../../API/AuthAPI';

const useLogout = () => {
  return useMutation(logout);
};

export default useLogout;
