import { useScrollToTop } from '@react-navigation/native';
import React from 'react';
import { ForgetPassword } from '../../components/templates';

const ForgetPasswordScreen = () => {
  const ref = React.useRef(null);

  useScrollToTop(ref);

  return <ForgetPassword />;
};

export default ForgetPasswordScreen;
