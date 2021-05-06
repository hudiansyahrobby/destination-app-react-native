import React from 'react';
import { Register } from '../../components/templates';
import { useScrollToTop } from '@react-navigation/native';

const RegisterScreen = () => {
  const ref = React.useRef(null);

  useScrollToTop(ref);

  return <Register />;
};

export default RegisterScreen;
