import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import DividerWithText from '../../atom/Divider/DividerWithText';
import { LoginForm, SocialButtons, TitleWithSubtitle } from '../../molecules';
import Picture from '../../../assets/main.svg';
import { useNavigation } from '@react-navigation/core';

const Login = () => {
  const navigation = useNavigation();

  return (
    <>
      <TitleWithSubtitle title="Selamat Datang" subtitle="Masuk ke Akun Anda" />
      <View style={styles.image}>
        <Picture width="100%" height={300} />
      </View>
      <LoginForm />
      <DividerWithText text="atau" />
      <SocialButtons option="login" />
      <Text
        style={styles.noAccount}
        onPress={() => navigation.navigate('Register')}>
        Tidak memiliki akun ? Daftar
      </Text>
    </>
  );
};

export default Login;

const styles = StyleSheet.create({
  noAccount: {
    textAlign: 'center',
    marginBottom: 20,
  },
  image: { marginVertical: 20 },
});
