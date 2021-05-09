import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import {
  ForgetPasswordScreen,
  LoginScreen,
  RegisterScreen,
} from '../../../screens';
import { PRIMARY_COLOR } from '../../../constants/color';
import HeaderRight from '../../../components/atom/HeaderRight';
import { useNavigation } from '@react-navigation/core';

const Stack = createStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: PRIMARY_COLOR,
  },
  headerTintColor: 'white',
  headerBackTitle: 'Back',
};

const AuthStackNavigation = () => {
  const navigation = useNavigation();

  return (
    <Stack.Navigator screenOptions={screenOptionStyle} initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          title: 'Masuk Akun',
          headerRight: () => (
            <HeaderRight
              text="Daftar"
              onPress={() => navigation.navigate('Register')}
            />
          ),
        }}
      />
      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={{
          title: 'Buat Akun',
          headerRight: () => (
            <HeaderRight
              text="Login"
              onPress={() => navigation.navigate('Login')}
            />
          ),
        }}
      />
      <Stack.Screen
        name="ForgetPassword"
        component={ForgetPasswordScreen}
        options={{
          title: 'Reset Password',
        }}
      />
    </Stack.Navigator>
  );
};

export default AuthStackNavigation;
