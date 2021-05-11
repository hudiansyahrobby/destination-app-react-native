import { useNavigation } from '@react-navigation/core';
import { QueryClient, useMutation } from 'react-query';
import { editDestination } from '../../API/DestinationAPI';

const useEditDestination = () => {
  const queryClient = new QueryClient();
  const navigation = useNavigation();

  return useMutation(editDestination, {
    onSuccess: () => {
      navigation.navigate('DestinationList');
      queryClient.invalidateQueries('destinations');
    },
  });
};

export default useEditDestination;
