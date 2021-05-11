import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { PRIMARY_COLOR } from '../../../constants/color';
import { DetailScreen, HomeScreen } from '../../../screens';

const Stack = createStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: PRIMARY_COLOR,
  },
  headerTintColor: 'white',
  headerBackTitle: 'Back',
};

const MainStackNavigation = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle} initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerTitle: 'Beranda',
        }}
      />
      <Stack.Screen
        name="Detail"
        component={DetailScreen}
        options={{
          headerTitle: 'Detail',
        }}
      />
    </Stack.Navigator>
  );
};

export default MainStackNavigation;
