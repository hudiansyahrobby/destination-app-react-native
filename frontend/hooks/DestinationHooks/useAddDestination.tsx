import { useNavigation } from '@react-navigation/core';
import { useMutation, useQueryClient } from 'react-query';
import { addDestination } from '../../API/DestinationAPI';

const useAddDestination = () => {
  const queryClient = useQueryClient();
  const navigation = useNavigation();

  return useMutation(addDestination, {
    onSuccess: () => {
      queryClient.invalidateQueries('destinations');
      navigation.navigate('DestinationList');
    },
  });
};

export default useAddDestination;
