import React from 'react';
import { Setting } from '../../components/templates';
import { useScrollToTop } from '@react-navigation/native';

const SettingScreen = () => {
  const ref = React.useRef(null);

  useScrollToTop(ref);

  return <Setting />;
};

export default SettingScreen;
