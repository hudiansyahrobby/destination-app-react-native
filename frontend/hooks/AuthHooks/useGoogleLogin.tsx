import { useNavigation } from '@react-navigation/core';
import { useMutation } from 'react-query';
// import { useDispatch } from 'react-redux';
import { loginGoogle } from '../../API/AuthAPI';
// import { setUser } from '../../redux/slices/userSlice';
// import AsyncStorage from '@react-native-async-storage/async-storage';

const useGoogleLogin = () => {
  const navigation = useNavigation();
  //   const dispatch = useDispatch();

  return useMutation(loginGoogle, {
    onSuccess: async (data) => {
      //   await AsyncStorage.setItem('token', data.token);
      //   dispatch(setUser(data));
      navigation.navigate('Home');
    },
  });
};

export default useGoogleLogin;
