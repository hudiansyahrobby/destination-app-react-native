import { StackActions, useNavigation } from '@react-navigation/core';
import { useMutation, useQueryClient } from 'react-query';
import { deleteDestination } from '../../API/DestinationAPI';

const useDeleteDestination = () => {
  const queryClient = useQueryClient();
  const navigation = useNavigation();

  return useMutation(deleteDestination, {
    onSuccess: () => {
      queryClient.invalidateQueries('destinations');
      navigation.dispatch(StackActions.replace('DestinationList'));
    },
  });
};

export default useDeleteDestination;
