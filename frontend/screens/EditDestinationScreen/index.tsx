import { useScrollToTop } from '@react-navigation/native';
import React from 'react';
import { Destination } from '../../components/templates';

const EditDestinationScreen = () => {
  const ref = React.useRef(null);

  useScrollToTop(ref);

  return <Destination />;
};

export default EditDestinationScreen;
