import { useNavigation } from '@react-navigation/core';
import React from 'react';
import SearchItem from '../../atom/SearchItem';
import { TitleWithSubtitle } from '../../molecules';
import Lists from '../../molecules/Lists';

const UserList = () => {
  const navigation = useNavigation();

  return (
    <>
      <TitleWithSubtitle title="Daftar Pengguna" subtitle="Cari Pengguna" />
      <SearchItem />
      <Lists title="Alex" />
    </>
  );
};

export default UserList;
