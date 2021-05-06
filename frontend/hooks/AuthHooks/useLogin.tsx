import { useMutation } from 'react-query';
import { login } from '../../API/AuthAPI';

const useLogin = () => {
  return useMutation(login);
};

export default useLogin;
