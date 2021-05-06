import React from 'react';
import { GRAY_COLOR } from '../../../constants/color';
import { TextInput } from '../../atom/Form';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Text } from 'react-native-elements';
import { SimpleButton } from '../../atom/Button';
import { StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/core';

const LoginForm = () => {
  const navigation = useNavigation();

  return (
    <>
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
      <Text
        style={styles.forgotPassword}
        onPress={() => navigation.navigate('ForgetPassword')}>
        Lupa Password ?
      </Text>
      <SimpleButton title="Masuk Akun" />
    </>
  );
};

export default LoginForm;

const styles = StyleSheet.create({
  forgotPassword: { alignSelf: 'flex-end', marginBottom: 25 },
});
