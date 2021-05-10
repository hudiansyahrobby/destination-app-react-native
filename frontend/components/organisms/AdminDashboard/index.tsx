import React from 'react';
import WelcomeCard from '../../molecules/WelcomeCard';
import ItemList from '../../molecules/ItemList';
import useDestinations from '../../../hooks/DestinationHooks/useDestinations';
import useUsers from '../../../hooks/UserHooks/useUsers';
import { StyleSheet, View } from 'react-native';
import { Title } from '../../atom/Typography';
import { useSelector } from 'react-redux';
import useCategories from '../../../hooks/CategoryHooks/useCategories';

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

  const {
    data: categories,
    isLoading: isCategoryLoading,
    isError: isCategoryError,
  } = useCategories();

  if (isDestinationLoading || isUserLoading || isCategoryLoading) {
    return (
      <View style={styles.text}>
        <Title size="sm">Loading...</Title>
      </View>
    );
  }

  if (isDestinationError || isUserError || isCategoryError) {
    return (
      <View style={styles.text}>
        <Title size="sm">Error</Title>
      </View>
    );
  }
  const totalDestination = destinations.meta.count;
  const totalUsers = users.meta.count;
  const totalCategories = categories?.length;

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

      <ItemList
        title={`${totalCategories} Jumlah Kategori`}
        goto="CategoryList"
        icon="apps"
      />

      <ItemList
        title="Tambah Destinasi Baru"
        goto="AddDestination"
        icon="rocket"
      />

      <ItemList
        title="Tambah Kategori Baru"
        goto="AddCategory"
        icon="aperture"
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
