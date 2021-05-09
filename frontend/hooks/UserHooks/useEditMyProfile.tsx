import { useNavigation } from '@react-navigation/core';
import { useMutation, useQueryClient } from 'react-query';
import { updateMyProfile } from '../../API/UsersAPI';

const useEditMyProfile = () => {
  const queryClient = useQueryClient();
  const navigation = useNavigation();

  return useMutation(updateMyProfile, {
    onSuccess: () => {
      queryClient.invalidateQueries('profile');
      navigation.navigate('MyProfile');
    },
  });
};

export default useEditMyProfile;
