import React from 'react';
import { DestinationList } from '../../components/templates';
import { useScrollToTop } from '@react-navigation/native';

const DestinationListScreen = () => {
  const ref = React.useRef(null);

  useScrollToTop(ref);

  return <DestinationList />;
};

export default DestinationListScreen;
