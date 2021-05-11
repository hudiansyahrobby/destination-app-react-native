import React, { useState } from 'react';
import { GRAY_COLOR } from '../../../constants/color';
import { TextInput } from '../../atom/Form';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { SimpleButton } from '../../atom/Button';
import useSignup from '../../../hooks/AuthHooks/useSignup';
import { Text } from 'react-native-elements';
import { showMessage } from 'react-native-flash-message';
import { capitalizeEachWord } from '../../../helpers/capitalizeEachWord';

const RegisterForm = () => {
  const [register, setRegister] = useState({
    displayName: '',
    email: '',
    password: '',
    passwordConfirmation: '',
  });

  const onInputChange = (inputName: string, inputValue: string) => {
    setRegister({ ...register, [inputName]: inputValue });
  };

  const { error, isError, isLoading, mutateAsync } = useSignup();

  const onSubmit = async () => {
    await mutateAsync(register);
  };

  const signupError: any = error;
  const appError = signupError?.response?.data?.message;

  React.useEffect(() => {
    if (isError) {
      showMessage({
        message: capitalizeEachWord(appError),
        type: 'danger',
      });
    }
  }, [isError, appError]);

  return (
    <>
      <TextInput
        label="Nama"
        value={register.displayName}
        onChangeText={(value) => onInputChange('displayName', value)}
        placeholder="Name"
        leftIcon={<Ionicons name="person" size={24} color={GRAY_COLOR} />}
      />

      <TextInput
        label="Email Address"
        keyboardType="email-address"
        value={register.email}
        onChangeText={(value) => onInputChange('email', value)}
        placeholder="Email Address"
        leftIcon={<Ionicons name="mail" size={24} color={GRAY_COLOR} />}
      />

      <TextInput
        label="Password"
        placeholder="Password"
        value={register.password}
        onChangeText={(value) => onInputChange('password', value)}
        secureTextEntry
        leftIcon={<Ionicons name="lock-closed" size={24} color={GRAY_COLOR} />}
        rightIcon={<Ionicons name="eye" size={24} color={GRAY_COLOR} />}
      />

      <TextInput
        label="Konfirmasi Password"
        placeholder="Konfirmasi Password"
        value={register.passwordConfirmation}
        onChangeText={(value) => onInputChange('passwordConfirmation', value)}
        secureTextEntry
        leftIcon={<Ionicons name="lock-closed" size={24} color={GRAY_COLOR} />}
        rightIcon={<Ionicons name="eye" size={24} color={GRAY_COLOR} />}
      />
      <SimpleButton title="Buat Akun" onPress={onSubmit} loading={isLoading} />
    </>
  );
};

export default RegisterForm;
