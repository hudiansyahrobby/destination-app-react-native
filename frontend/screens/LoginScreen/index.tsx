import { useScrollToTop } from '@react-navigation/native';
import React from 'react';
import { Login } from '../../components/templates';

const LoginScreen = () => {
  const ref = React.useRef(null);

  useScrollToTop(ref);

  return <Login />;
};

export default LoginScreen;
