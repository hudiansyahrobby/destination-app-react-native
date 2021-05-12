import React from 'react';
import { StyleSheet, View } from 'react-native';
import SearchItem from '../../atom/SearchItem';
import { TitleWithSubtitle } from '../../molecules';
import UserCard from '../../molecules/UserCard';

interface UserListProps {
  userList: any;
}
const UserList: React.FC<UserListProps> = ({ userList }) => {
  return (
    <>
      <TitleWithSubtitle title="Daftar Pengguna" subtitle="Cari Pengguna" />
      <SearchItem />
      <View style={styles.container}>
        {userList?.map((users: any) => (
          <UserCard users={users?.data} />
        ))}
      </View>
    </>
  );
};

export default UserList;

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    marginBottom: 15,
  },
  text: {
    marginHorizontal: 20,
    marginTop: 20,
  },
});
