import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { DetailScreen, HomeScreen } from '../../../screens';
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

const MainStackNavigation = () => {
  const navigation = useNavigation();

  return (
    <Stack.Navigator screenOptions={screenOptionStyle} initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerRight: () => (
            <HeaderRight
              text="Login"
              onPress={() => navigation.navigate('Login')}
            />
          ),
        }}
      />
      <Stack.Screen
        name="Detail"
        component={DetailScreen}
        options={{
          headerRight: () => (
            <HeaderRight
              text="Login"
              onPress={() => navigation.navigate('Login')}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export default MainStackNavigation;
