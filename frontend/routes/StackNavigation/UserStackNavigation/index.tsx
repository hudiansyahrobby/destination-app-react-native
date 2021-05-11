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
  MyProfileScreen,
  AddDestinationScreen,
  AddCategoryScreen,
  EditCategoryScreen,
  CategoryListScreen,
  EditDestinationScreen,
} from '../../../screens';
import { PRIMARY_COLOR } from '../../../constants/color';
import HeaderRight from '../../../components/atom/HeaderRight';
import useLogout from '../../../hooks/AuthHooks/useLogout';

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

      <Stack.Screen
        name="AdminDashboard"
        component={AdminDashboardScreen}
        options={{
          headerTitle: 'Admin Dashboard',
        }}
      />

      <Stack.Screen
        name="AddDestination"
        component={AddDestinationScreen}
        options={{
          headerTitle: 'Tambah Destinasi Baru',
        }}
      />

      <Stack.Screen
        name="EditDestination"
        component={EditDestinationScreen}
        options={{
          headerTitle: 'Edit Destinasi',
        }}
      />

      <Stack.Screen
        name="AddCategory"
        component={AddCategoryScreen}
        options={{
          headerTitle: 'Tambah Kategori Baru',
        }}
      />

      <Stack.Screen
        name="EditCategory"
        component={EditCategoryScreen}
        options={{
          headerTitle: 'Edit Kategori',
        }}
      />

      <Stack.Screen
        name="CategoryList"
        component={CategoryListScreen}
        options={{
          headerTitle: 'Daftar Kategori',
        }}
      />

      <Stack.Screen
        name="UserList"
        component={UserListScreen}
        options={{
          headerTitle: 'Daftar Pengguna',
        }}
      />

      <Stack.Screen
        name="DestinationList"
        component={DestinationListScreen}
        options={{
          headerTitle: 'Daftar Destinasi',
        }}
      />
    </Stack.Navigator>
  );
};

export default UserStackNavigation;
