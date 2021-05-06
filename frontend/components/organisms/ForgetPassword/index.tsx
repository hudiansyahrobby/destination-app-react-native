import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ForgetPasswordForm, TitleWithSubtitle } from '../../molecules';
import Picture from '../../../assets/reset-password.svg';

const ForgetPassword = () => {
  return (
    <>
      <TitleWithSubtitle
        title="Reset Password"
        subtitle="Masukkan email untuk reset password"
      />
      <View style={styles.image}>
        <Picture width="100%" height={300} />
      </View>
      <ForgetPasswordForm />
    </>
  );
};

export default ForgetPassword;

const styles = StyleSheet.create({
  noAccount: {
    textAlign: 'center',
    marginBottom: 20,
  },
  image: { marginVertical: 20 },
});
