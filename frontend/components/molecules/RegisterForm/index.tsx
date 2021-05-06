import React from 'react';
import { GRAY_COLOR } from '../../../constants/color';
import { TextInput } from '../../atom/Form';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { SimpleButton } from '../../atom/Button';

const RegisterForm = () => {
  return (
    <>
      <TextInput
        label="Nama"
        placeholder="Name"
        leftIcon={<Ionicons name="person" size={24} color={GRAY_COLOR} />}
      />

      <TextInput
        label="Email Address"
        keyboardType="email-address"
        placeholder="Email Address"
        leftIcon={<Ionicons name="mail" size={24} color={GRAY_COLOR} />}
      />

      <TextInput
        label="Password"
        placeholder="Password"
        secureTextEntry
        leftIcon={<Ionicons name="lock-closed" size={24} color={GRAY_COLOR} />}
        rightIcon={<Ionicons name="eye" size={24} color={GRAY_COLOR} />}
      />
      <SimpleButton title="Buat Akun" />
    </>
  );
};

export default RegisterForm;
