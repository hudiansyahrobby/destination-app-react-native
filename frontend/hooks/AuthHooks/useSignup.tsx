import { useMutation } from 'react-query';
import { signup } from '../../API/AuthAPI';

const useSignup = () => {
  return useMutation(signup);
};

export default useSignup;
