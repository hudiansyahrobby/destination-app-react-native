import { useNavigation } from '@react-navigation/core';
import { QueryClient, useMutation } from 'react-query';
import { editDestination } from '../../API/DestinationAPI';

const useEditDestination = () => {
  const queryClient = new QueryClient();
  const navigation = useNavigation();

  return useMutation(editDestination, {
    onSuccess: () => {
      queryClient.invalidateQueries('destination');
      navigation.navigate('DestinationList');
    },
  });
};

export default useEditDestination;
