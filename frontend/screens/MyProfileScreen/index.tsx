import { useScrollToTop } from '@react-navigation/native';
import React from 'react';
import { MyProfile } from '../../components/templates';

const MyProfileScreen = () => {
  const ref = React.useRef(null);

  useScrollToTop(ref);

  return <MyProfile />;
};

export default MyProfileScreen;
