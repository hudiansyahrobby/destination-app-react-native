import React from 'react';
import WelcomeCard from '../../molecules/WelcomeCard';
import ItemList from '../../molecules/ItemList';
import useDestinations from '../../../hooks/DestinationHooks/useDestinations';
import useUsers from '../../../hooks/UserHooks/useUsers';
import { StyleSheet, View } from 'react-native';
import { Title } from '../../atom/Typography';

const AdminDashboard = () => {
  const {
    data: destinations,
    isLoading: isDestinationLoading,
    isError: isDestinationError,
  } = useDestinations();

  const {
    data: users,
    isLoading: isUserLoading,
    isError: isUserError,
  } = useUsers();

  if (isDestinationLoading || isUserLoading) {
    return (
      <View style={styles.text}>
        <Title size="sm">Loading...</Title>
      </View>
    );
  }

  if (isDestinationError || isUserError) {
    return (
      <View style={styles.text}>
        <Title size="sm">Error</Title>
      </View>
    );
  }
  console.log('USERS', users);
  const totalDestination = destinations.meta.count;
  const totalUsers = users.meta.count;

  return (
    <>
      <WelcomeCard name="Robby Hudiansyah" />
      <ItemList title={`${totalUsers} Pengguna Terdaftar`} goto="UserList" />
      <ItemList
        title={`${totalDestination} Jumlah Destinasi`}
        goto="DestinationList"
      />
    </>
  );
};

export default AdminDashboard;

const styles = StyleSheet.create({
  text: {
    marginHorizontal: 20,
    marginTop: 20,
  },
});
