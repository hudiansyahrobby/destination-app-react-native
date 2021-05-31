import { useNavigation } from '@react-navigation/core';
import { useMutation, useQueryClient } from 'react-query';
import { useDispatch } from 'react-redux';
import { updateMyProfile } from '../../API/UsersAPI';
import { setEditUser } from '../../redux/slices/userSlice';

const useEditMyProfile = () => {
  const queryClient = useQueryClient();
  const navigation = useNavigation();
  const dispatch = useDispatch();

  return useMutation(updateMyProfile, {
    onSuccess: (data) => {
      console.log('DATA', data);
      dispatch(setEditUser(data));
      queryClient.invalidateQueries('profile');
      navigation.navigate('MyProfile');
    },
  });
};

export default useEditMyProfile;
