import { StackActions, useNavigation } from '@react-navigation/core';
import { QueryClient, useMutation } from 'react-query';
import { editDestination } from '../../API/DestinationAPI';

const useEditDestination = (destinationId: string) => {
  const queryClient = new QueryClient();
  const navigation = useNavigation();

  return useMutation(editDestination, {
    onError: (error, variables, context) => {
      console.log('ERROR', error);
    },
    onSuccess: () => {
      queryClient.invalidateQueries('destinations');
      queryClient.invalidateQueries(['destination', destinationId]);
      navigation.dispatch(StackActions.replace('DestinationList'));
    },
  });
};

export default useEditDestination;
