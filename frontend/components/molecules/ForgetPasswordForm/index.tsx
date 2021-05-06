import React from 'react';
import { GRAY_COLOR } from '../../../constants/color';
import { TextInput } from '../../atom/Form';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { SimpleButton } from '../../atom/Button';

const ForgetPasswordForm = () => {
  return (
    <>
      <TextInput
        label="Email Address"
        placeholder="Email Address"
        leftIcon={<Ionicons name="mail" size={24} color={GRAY_COLOR} />}
      />

      <SimpleButton title="Reset Password" />
    </>
  );
};

export default ForgetPasswordForm;
