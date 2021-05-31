import { Formik } from 'formik';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { showMessage } from 'react-native-flash-message';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { GRAY_COLOR } from '../../../constants/color';
import { capitalizeEachWord } from '../../../helpers/capitalizeEachWord';
import useSignup from '../../../hooks/AuthHooks/useSignup';
import signUpValidationSchema from '../../../validations/signupValidation';
import { SimpleButton } from '../../atom/Button';
import { TextInput } from '../../atom/Form';
import ErrorText from '../../atom/Form/ErrorText';
import PasswordInput from '../../atom/Form/PasswordInput';

const RegisterForm = () => {
  const { error, isLoading, mutateAsync } = useSignup();

  const signupError: any = error;
  const appError = signupError?.response?.data?.message;

  return (
    <Formik
      initialValues={{
        displayName: '',
        email: '',
        password: '',
        passwordConfirmation: '',
      }}
      onSubmit={async (values) => {
        await mutateAsync(values, {
          onSuccess: () => {
            showMessage({
              message: 'Berhasil Membuat Akun',
              type: 'success',
            });
          },
          onError: () => {
            showMessage({
              message: capitalizeEachWord(appError),
              type: 'danger',
            });
          },
        });
      }}
      validationSchema={signUpValidationSchema}>
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        touched,
        errors,
      }) => (
        <>
          <View style={styles.container}>
            <TextInput
              label="Nama"
              onChangeText={handleChange('displayName')}
              onBlur={handleBlur('displayName')}
              value={values.displayName}
              placeholder="Nama"
              leftIcon={<Ionicons name="person" size={24} color={GRAY_COLOR} />}
            />
            {errors.displayName && touched.displayName && (
              <ErrorText message={errors.displayName} />
            )}

            <TextInput
              label="Email Address"
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              keyboardType="email-address"
              value={values.email}
              placeholder="Email Address"
              leftIcon={<Ionicons name="mail" size={24} color={GRAY_COLOR} />}
            />
            {errors.email && touched.email && (
              <ErrorText message={errors.email} />
            )}

            <PasswordInput
              label="Password"
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
              placeholder="Password"
            />

            {errors.password && touched.password && (
              <ErrorText message={errors.password} />
            )}

            <PasswordInput
              label="Konfirmasi Password"
              onChangeText={handleChange('passwordConfirmation')}
              onBlur={handleBlur('passwordConfirmation')}
              value={values.passwordConfirmation}
              placeholder="Konfirmasi Password"
            />
            {errors.passwordConfirmation && touched.passwordConfirmation && (
              <ErrorText message={errors.passwordConfirmation} />
            )}
          </View>

          <SimpleButton
            title="Buat Akun"
            onPress={handleSubmit}
            loading={isLoading}
          />
        </>
      )}
    </Formik>
  );
};

export default RegisterForm;

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
});
