import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { View } from 'react-native';
import { ListItem } from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { PRIMARY_COLOR } from '../../../constants/color';

const SettingBody = () => {
  const list = [
    {
      title: 'My Profile',
      icon: 'person-circle-outline',
      navigation: 'MyProfile',
    },
    {
      title: 'Edit Profile',
      icon: 'create-outline',
      navigation: 'EditProfile',
    },
    {
      title: 'Admin Dashboard',
      icon: 'ios-bar-chart-outline',
      navigation: 'AdminDashboard',
    },
    {
      title: 'Favorite Destination',
      icon: 'heart-outline',
      navigation: 'Favorite',
    },
    {
      title: 'Rate Us',
      icon: 'star-outline',
      navigation: 'Favorite',
    },
    {
      title: 'Logout',
      icon: 'exit-outline',
      navigation: 'Login',
    },
  ];

  const navigation = useNavigation();

  return (
    <View>
      {list.map((item, i) => (
        <ListItem
          key={i}
          bottomDivider
          topDivider
          onPress={() => navigation.navigate(item.navigation)}>
          <Ionicons name={item.icon} size={30} color={PRIMARY_COLOR} />
          <ListItem.Content>
            <ListItem.Title>{item.title}</ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
      ))}
    </View>
  );
};

export default SettingBody;
