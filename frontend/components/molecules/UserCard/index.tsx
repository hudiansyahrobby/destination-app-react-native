import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Avatar, ListItem } from 'react-native-elements';
import { capitalizeEachWord } from '../../../helpers/capitalizeEachWord';
import { IUserProfile } from '../../../types/UserType';
import NoData from '../../atom/Typography/NoData';

interface UserCardProps {
  users: IUserProfile[];
}

const UserCard: React.FC<UserCardProps> = ({ users }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {users.length !== 0 ? (
        users.map((user, index) => (
          <ListItem
            key={index}
            bottomDivider
            topDivider
            onPress={() => {
              return navigation.navigate('Settings', {
                params: {
                  itemId: user.uid,
                  headerTitle: user.displayName,
                },
                screen: 'Profile',
              });
            }}>
            <Avatar
              source={{
                uri:
                  user?.photoURL ||
                  'https://st.depositphotos.com/2101611/3925/v/600/depositphotos_39258143-stock-illustration-businessman-avatar-profile-picture.jpg',
              }}
              rounded
            />
            <ListItem.Content>
              <ListItem.Title>
                {capitalizeEachWord(user.displayName)}
              </ListItem.Title>
              <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
            </ListItem.Content>
            <ListItem.Chevron />
          </ListItem>
        ))
      ) : (
        <NoData>Tidak Ada Pengguna</NoData>
      )}
    </View>
  );
};

export default UserCard;

const styles = StyleSheet.create({
  container: { marginVertical: 20 },
});
