import React from 'react';
import { StyleSheet, View } from 'react-native';
import UserCard from '../../molecules/UserCard';

interface UserListProps {
  userList: any;
}
const UserList: React.FC<UserListProps> = ({ userList }) => {
  return (
    <>
      <View style={styles.container}>
        {userList?.map((users: any, index: number) => (
          <UserCard users={users?.data} key={index} />
        ))}
      </View>
    </>
  );
};

export default UserList;

const styles = StyleSheet.create({
  container: {
    marginTop: 0,
    marginBottom: 15,
  },
  text: {
    marginHorizontal: 20,
    marginTop: 20,
  },
});
