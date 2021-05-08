import { useNavigation } from '@react-navigation/core';
import { useMutation } from 'react-query';
import { useDispatch } from 'react-redux';
import { login } from '../../API/AuthAPI';
import { setUser } from '../../redux/slices/userSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';

const useLogin = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  return useMutation(login, {
    onSuccess: async (data) => {
      await AsyncStorage.setItem('token', data.token);
      dispatch(setUser(data));
      navigation.navigate('Home');
    },
  });
};

export default useLogin;
