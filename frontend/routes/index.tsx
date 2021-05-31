import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { PRIMARY_COLOR } from '../constants/color';
import AuthStackNavigation from './StackNavigation/AuthStackNavigation';
import MainStackNavigation from './StackNavigation/MainStackNavigation';
import { AdminStackNavigation, UserStackNavigation } from './StackNavigation';
import { useSelector } from 'react-redux';

const Routes = () => {
  const Tab = createBottomTabNavigator();

  const { isLogin, isAdmin } = useSelector((state: any) => state.user);

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Main"
        tabBarOptions={{
          activeTintColor: PRIMARY_COLOR,
        }}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName: string = '';

            if (route.name === 'Main') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'settings' : 'settings-outline';
            } else if (route.name === 'Auth') {
              iconName = focused ? 'person' : 'person-outline';
            } else if (route.name === 'Admin') {
              iconName = focused ? 'ios-bar-chart' : 'ios-bar-chart-outline';
            }
            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}>
        <Tab.Screen
          name="Main"
          component={MainStackNavigation}
          options={{ title: 'Beranda' }}
        />
        {!isLogin && (
          <Tab.Screen
            name="Auth"
            component={AuthStackNavigation}
            options={{ title: 'Login' }}
          />
        )}
        {isAdmin && (
          <Tab.Screen
            name="Admin"
            component={AdminStackNavigation}
            options={{ title: 'Admin Dashboard' }}
          />
        )}
        {isLogin && (
          <Tab.Screen
            name="Settings"
            component={UserStackNavigation}
            options={{ title: 'Pengaturan' }}
          />
        )}
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
