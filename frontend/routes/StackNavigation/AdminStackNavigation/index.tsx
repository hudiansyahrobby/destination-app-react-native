import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import HeaderRight from '../../../components/atom/HeaderRight';
import { PRIMARY_COLOR } from '../../../constants/color';
import useLogout from '../../../hooks/AuthHooks/useLogout';
import {
  AddCategoryScreen,
  AddDestinationScreen,
  AdminDashboardScreen,
  CategoryListScreen,
  DestinationListScreen,
  EditCategoryScreen,
  EditDestinationScreen,
  SettingScreen,
  UserListScreen,
} from '../../../screens';

const Stack = createStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: PRIMARY_COLOR,
  },
  headerTintColor: 'white',
  headerBackTitle: 'Back',
};

const AdminStackNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={screenOptionStyle}
      initialRouteName="AdminDashboard">
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

export default AdminStackNavigation;
