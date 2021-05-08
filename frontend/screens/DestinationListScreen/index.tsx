import React from 'react';
import { DestinationList } from '../../components/templates';
import { useScrollToTop } from '@react-navigation/native';

const DestinationListScreen = () => {
  const ref = React.useRef(null);

  useScrollToTop(ref);
  console.log('HAHAHAH');
  return <DestinationList />;
};

export default DestinationListScreen;
