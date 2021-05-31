import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { View } from 'react-native';
import { ListItem } from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { PRIMARY_COLOR } from '../../../constants/color';
import useLogout from '../../../hooks/AuthHooks/useLogout';

const SettingBody = () => {
  const { mutateAsync } = useLogout();

  const onLogout = async () => {
    await mutateAsync();
  };

  const list = [
    {
      title: 'Profil Saya',
      icon: 'person-circle-outline',
      navigation: 'MyProfile',
    },
    {
      title: 'Edit Profil',
      icon: 'create-outline',
      navigation: 'EditProfile',
    },
    {
      title: 'Favorite Destination',
      icon: 'heart-outline',
      navigation: 'Favorite',
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
      <ListItem bottomDivider topDivider onPress={() => onLogout()}>
        <Ionicons name="ios-exit-outline" size={30} color={PRIMARY_COLOR} />
        <ListItem.Content>
          <ListItem.Title>Keluar</ListItem.Title>
        </ListItem.Content>
        <ListItem.Chevron />
      </ListItem>
    </View>
  );
};

export default SettingBody;
