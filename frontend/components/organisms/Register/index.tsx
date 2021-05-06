import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import DividerWithText from '../../atom/Divider/DividerWithText';
import {
  RegisterForm,
  SocialButtons,
  TitleWithSubtitle,
} from '../../molecules';
import Picture from '../../../assets/main.svg';
import { useNavigation } from '@react-navigation/core';

const Register = () => {
  const navigation = useNavigation();

  return (
    <>
      <TitleWithSubtitle title="Selamat Datang" subtitle="Buat Akun Anda" />
      <View style={styles.image}>
        <Picture width="100%" height={300} />
      </View>
      <RegisterForm />
      <DividerWithText text="atau" />
      <SocialButtons option="register" />
      <Text style={styles.alt} onPress={() => navigation.navigate('Login')}>
        Sudah memiliki akun ? masuk
      </Text>
    </>
  );
};

export default Register;

const styles = StyleSheet.create({
  alt: {
    textAlign: 'center',
    marginBottom: 20,
  },
  image: { marginVertical: 20 },
});
