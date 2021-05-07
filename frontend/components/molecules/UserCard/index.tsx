import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Avatar, ListItem } from 'react-native-elements';
import { IUser } from '../../../types/UserType';

interface UserCardProps {
  users: IUser[];
}

const UserCard: React.FC<UserCardProps> = ({ users }) => {
  const navigation = useNavigation();

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
            })
          }>
          <Avatar
            source={{
              uri:
                'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
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
