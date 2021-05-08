import React from 'react';
import WelcomeCard from '../../molecules/WelcomeCard';
import ItemList from '../../molecules/ItemList';
import useDestinations from '../../../hooks/DestinationHooks/useDestinations';
import useUsers from '../../../hooks/UserHooks/useUsers';
import { StyleSheet, View } from 'react-native';
import { Title } from '../../atom/Typography';
import { useSelector } from 'react-redux';

const AdminDashboard = () => {
  const {
    data: destinations,
    isLoading: isDestinationLoading,
    isError: isDestinationError,
  } = useDestinations();

  const { user } = useSelector((state: any) => state.user);

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
  const totalDestination = destinations.meta.count;
  const totalUsers = users.meta.count;

  return (
    <>
      <WelcomeCard name={user?.displayName} />
      <ItemList
        title={`${totalUsers} Pengguna Terdaftar`}
        goto="UserList"
        icon="person"
      />
      <ItemList
        title={`${totalDestination} Jumlah Destinasi`}
        goto="DestinationList"
        icon="location"
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
