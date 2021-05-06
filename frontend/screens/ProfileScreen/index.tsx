import { useScrollToTop } from '@react-navigation/native';
import React from 'react';
import { Profile } from '../../components/templates';

const ProfileScreen = () => {
  const ref = React.useRef(null);

  useScrollToTop(ref);

  return <Profile />;
};

export default ProfileScreen;
