import { useScrollToTop } from '@react-navigation/native';
import React from 'react';
import { EditDestination } from '../../components/templates';

const EditDestinationScreen = () => {
  const ref = React.useRef(null);

  useScrollToTop(ref);

  return <EditDestination />;
};

export default EditDestinationScreen;
