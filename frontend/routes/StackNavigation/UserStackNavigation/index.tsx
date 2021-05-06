import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import {
  ProfileScreen,
  FavoriteScreen,
  SettingScreen,
  EditProfileScreen,
  AdminDashboardScreen,
  UserListScreen,
  DestinationListScreen,
} from '../../../screens';
import { PRIMARY_COLOR } from '../../../constants/color';
import HeaderRight from '../../../components/atom/HeaderRight';

const Stack = createStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: PRIMARY_COLOR,
  },
  headerTintColor: 'white',
  headerBackTitle: 'Back',
};

const UserStackNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={screenOptionStyle}
      initialRouteName="Setting">
      <Stack.Screen
        name="Setting"
        component={SettingScreen}
        options={{
          headerRight: () => <HeaderRight text="Logout" />,
          title: 'Pengaturan',
        }}
      />
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerRight: () => <HeaderRight text="Logout" />,
        }}
      />
      <Stack.Screen
        name="EditProfile"
        component={EditProfileScreen}
        options={{
          headerTitle: 'Edit Profile',
          headerRight: () => <HeaderRight text="Logout" />,
        }}
      />
      <Stack.Screen
        name="Favorite"
        component={FavoriteScreen}
        options={{
          headerRight: () => <HeaderRight text="Logout" />,
        }}
      />

      <Stack.Screen
        name="AdminDashboard"
        component={AdminDashboardScreen}
        options={{
          headerTitle: 'Admin Dashboard',
          headerRight: () => <HeaderRight text="Logout" />,
        }}
      />

      <Stack.Screen
        name="UserList"
        component={UserListScreen}
        options={{
          headerTitle: 'User List',
          headerRight: () => <HeaderRight text="Logout" />,
        }}
      />

      <Stack.Screen
        name="DestinationList"
        component={DestinationListScreen}
        options={{
          headerTitle: 'Destination List',
          headerRight: () => <HeaderRight text="Logout" />,
        }}
      />
    </Stack.Navigator>
  );
};

export default UserStackNavigation;
