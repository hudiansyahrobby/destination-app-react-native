import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Avatar, ListItem } from 'react-native-elements';
import { IUserProfile } from '../../../types/UserType';

interface UserCardProps {
  users: IUserProfile[];
}

const UserCard: React.FC<UserCardProps> = ({ users }) => {
  const navigation = useNavigation();
  console.log('USERS', users);

  return (
    <View style={styles.container}>
      {users.map((user, index) => (
        <ListItem
          key={index}
          bottomDivider
          topDivider
          onPress={() =>
            navigation.navigate('Profile', {
              itemId: user.uid,
              headerTitle: user.displayName,
            })
          }>
          <Avatar
            source={{
              uri:
                user?.photoURL ||
                'https://st.depositphotos.com/2101611/3925/v/600/depositphotos_39258143-stock-illustration-businessman-avatar-profile-picture.jpg',
            }}
            rounded
          />
          <ListItem.Content>
            <ListItem.Title>{user.displayName}</ListItem.Title>
            <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
      ))}
    </View>
  );
};

export default UserCard;

const styles = StyleSheet.create({
  container: { marginVertical: 20 },
});
