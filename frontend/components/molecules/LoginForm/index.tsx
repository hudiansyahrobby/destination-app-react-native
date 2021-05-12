import { useNavigation } from '@react-navigation/core';
import { Formik } from 'formik';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { showMessage } from 'react-native-flash-message';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { GRAY_COLOR } from '../../../constants/color';
import { capitalizeEachWord } from '../../../helpers/capitalizeEachWord';
import useLogin from '../../../hooks/AuthHooks/useLogin';
import loginValidationSchema from '../../../validations/loginValidation';
import { SimpleButton } from '../../atom/Button';
import { TextInput } from '../../atom/Form';
import ErrorText from '../../atom/Form/ErrorText';

const LoginForm = () => {
  const { isError, error, isLoading, mutateAsync } = useLogin();
  const navigation = useNavigation();

  const loginError: any = error;
  const appError = loginError?.response?.data?.message;

  React.useEffect(() => {
    if (isError) {
      showMessage({
        message: capitalizeEachWord(appError),
        type: 'danger',
      });
    }
  }, [isError, appError]);

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      onSubmit={async (values) => {
        await mutateAsync(values);
      }}
      validationSchema={loginValidationSchema}>
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

            <TextInput
              label="Password"
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
              placeholder="Password"
              secureTextEntry
              leftIcon={
                <Ionicons name="lock-closed" size={24} color={GRAY_COLOR} />
              }
              rightIcon={<Ionicons name="eye" size={24} color={GRAY_COLOR} />}
            />
            {errors.password && touched.password && (
              <ErrorText message={errors.password} />
            )}
          </View>
          <Text
            style={styles.forgotPassword}
            onPress={() => navigation.navigate('ForgetPassword')}>
            Lupa Password ?
          </Text>
          <SimpleButton
            title="Masuk Akun"
            onPress={handleSubmit}
            loading={isLoading}
          />
        </>
      )}
    </Formik>
  );
};

export default LoginForm;

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  forgotPassword: { alignSelf: 'flex-end', marginBottom: 25 },
});
