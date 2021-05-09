import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/core';
import { useMutation } from 'react-query';
import { useDispatch } from 'react-redux';
import { logout } from '../../API/AuthAPI';
import { removeUser } from '../../redux/slices/userSlice';

const useLogout = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  return useMutation(logout, {
    onSuccess: async () => {
      dispatch(removeUser());
      navigation.navigate('Auth', { screen: 'Login' });
    },
  });
};

export default useLogout;
