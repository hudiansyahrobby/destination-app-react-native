import React from 'react';
import { StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import useCategories from '../../../hooks/CategoryHooks/useCategories';
import useDestinations from '../../../hooks/DestinationHooks/useDestinations';
import useUsers from '../../../hooks/UserHooks/useUsers';
import Loading from '../../atom/Loading';
import { Title } from '../../atom/Typography';
import ItemList from '../../molecules/ItemList';
import WelcomeCard from '../../molecules/WelcomeCard';

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
    return <Loading />;
  }

  if (isDestinationError || isUserError || isCategoryError) {
    return <Title>Error</Title>;
  }
  const totalDestination = destinations?.pages[0]?.meta.count;
  const totalUsers = users?.pages[0]?.meta.count;
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
