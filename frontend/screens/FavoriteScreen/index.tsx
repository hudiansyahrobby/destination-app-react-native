import { useScrollToTop } from '@react-navigation/native';
import React from 'react';
import { Home } from '../../components/templates';

const FavoriteScreen = () => {
  const ref = React.useRef(null);

  useScrollToTop(ref);

  return <Home />;
};

export default FavoriteScreen;
