import React from 'react';
import WelcomeCard from '../../molecules/WelcomeCard';
import ItemList from '../../molecules/ItemList';

const AdminDashboard = () => {
  return (
    <>
      <WelcomeCard name="Robby Hudiansyah" />
      <ItemList title="5 Pengguna Terdaftar" goto="UserList" />
      <ItemList title="5 Jumlah Destinasi" goto="DestinationList" />
    </>
  );
};

export default AdminDashboard;
