import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import HeaderRight from '../../../components/atom/HeaderRight';
import { PRIMARY_COLOR } from '../../../constants/color';
import useLogout from '../../../hooks/AuthHooks/useLogout';
import {
  EditProfileScreen,
  FavoriteScreen,
  MyProfileScreen,
  ProfileScreen,
  SettingScreen,
} from '../../../screens';

const Stack = createStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: PRIMARY_COLOR,
  },
  headerTintColor: 'white',
  headerBackTitle: 'Back',
};

const UserStackNavigation = () => {
  const { mutateAsync } = useLogout();

  const onLogout = async () => {
    await mutateAsync();
  };

  return (
    <Stack.Navigator
      screenOptions={screenOptionStyle}
      initialRouteName="Setting">
      <Stack.Screen
        name="Setting"
        component={SettingScreen}
        options={{
          headerRight: () => <HeaderRight text="Keluar" onPress={onLogout} />,
          title: 'Pengaturan',
        }}
      />

      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: 'Profil',
        }}
      />

      <Stack.Screen
        name="MyProfile"
        component={MyProfileScreen}
        options={{
          headerTitle: 'Profil Saya',
        }}
      />

      <Stack.Screen
        name="EditProfile"
        component={EditProfileScreen}
        options={{
          headerTitle: 'Edit Profil',
        }}
      />

      <Stack.Screen
        name="Favorite"
        component={FavoriteScreen}
        options={{
          headerTitle: 'Destinasi Favorit',
        }}
      />
    </Stack.Navigator>
  );
};

export default UserStackNavigation;
