import React from 'react';
import { GRAY_COLOR } from '../../../constants/color';
import { TextInput } from '../../atom/Form';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Text } from 'react-native-elements';
import { SimpleButton } from '../../atom/Button';
import { StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import useLogin from '../../../hooks/AuthHooks/useLogin';

const LoginForm = () => {
  const [login, setLogin] = React.useState({
    email: '',
    password: '',
  });

  const onInputChange = (inputName: string, inputValue: string) => {
    setLogin({ ...login, [inputName]: inputValue });
  };

  const { isError, error, isLoading, mutateAsync } = useLogin();

  const onSubmit = async () => {
    await mutateAsync(login);
  };

  const navigation = useNavigation();

  const loginError: any = error;
  console.log(loginError);
  return (
    <>
      {isError && <Text>Error</Text>}
      <TextInput
        label="Email Address"
        keyboardType="email-address"
        placeholder="Email Address"
        onChangeText={(value) => onInputChange('email', value)}
        leftIcon={<Ionicons name="mail" size={24} color={GRAY_COLOR} />}
      />

      <TextInput
        label="Password"
        placeholder="Password"
        onChangeText={(value) => onInputChange('password', value)}
        secureTextEntry
        leftIcon={<Ionicons name="lock-closed" size={24} color={GRAY_COLOR} />}
        rightIcon={<Ionicons name="eye" size={24} color={GRAY_COLOR} />}
      />
      <Text
        style={styles.forgotPassword}
        onPress={() => navigation.navigate('ForgetPassword')}>
        Lupa Password ?
      </Text>
      <SimpleButton title="Masuk Akun" onPress={onSubmit} loading={isLoading} />
    </>
  );
};

export default LoginForm;

const styles = StyleSheet.create({
  forgotPassword: { alignSelf: 'flex-end', marginBottom: 25 },
});
