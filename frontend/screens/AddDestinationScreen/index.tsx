import { useScrollToTop } from '@react-navigation/native';
import React from 'react';
import { Destination } from '../../components/templates';

const AddDestinationScreen = () => {
  const ref = React.useRef(null);

  useScrollToTop(ref);

  return <Destination />;
};

export default AddDestinationScreen;
