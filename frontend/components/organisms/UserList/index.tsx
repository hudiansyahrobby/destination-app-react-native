import React from 'react';
import { StyleSheet, View } from 'react-native';
import useUsers from '../../../hooks/UserHooks/useUsers';
import SearchItem from '../../atom/SearchItem';
import { Title } from '../../atom/Typography';
import { TitleWithSubtitle } from '../../molecules';
import UserCard from '../../molecules/UserCard';

const UserList = () => {
  const { data, isLoading, isError } = useUsers();
  const users = data;

  if (isLoading) {
    return (
      <View style={styles.text}>
        <Title size="sm">Loading...</Title>
      </View>
    );
  }

  if (isError) {
    return (
      <View style={styles.text}>
        <Title size="sm">Loading..</Title>
      </View>
    );
  }

  return (
    <>
      <TitleWithSubtitle title="Daftar Pengguna" subtitle="Cari Pengguna" />
      <SearchItem />
      <UserCard users={users} />
    </>
  );
};

export default UserList;

const styles = StyleSheet.create({
  text: {
    marginHorizontal: 20,
    marginTop: 20,
  },
});
