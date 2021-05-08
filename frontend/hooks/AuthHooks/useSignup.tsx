import { useNavigation } from '@react-navigation/core';
import { useMutation } from 'react-query';
import { signup } from '../../API/AuthAPI';

const useSignup = () => {
  const navigation = useNavigation();

  return useMutation(signup, {
    onSuccess: () => {
      navigation.navigate('Login');
    },
  });
};

export default useSignup;
