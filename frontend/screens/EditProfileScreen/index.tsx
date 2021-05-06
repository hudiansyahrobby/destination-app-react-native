import { useScrollToTop } from '@react-navigation/native';
import React from 'react';
import { EditProfile } from '../../components/templates';

const EditProfileScreen = () => {
  const ref = React.useRef(null);

  useScrollToTop(ref);

  return <EditProfile />;
};

export default EditProfileScreen;
