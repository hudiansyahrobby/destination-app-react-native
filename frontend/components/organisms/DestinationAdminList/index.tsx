import { useNavigation } from '@react-navigation/core';
import React from 'react';
import SearchItem from '../../atom/SearchItem';
import { TitleWithSubtitle } from '../../molecules';
import Lists from '../../molecules/Lists';

const DestinationAdminList = () => {
  const navigation = useNavigation();

  return (
    <>
      <TitleWithSubtitle title="Daftar Destinasi" subtitle="Cari Destinasi" />
      <SearchItem />
      <Lists title="Pantai Ampenan" />
    </>
  );
};

export default DestinationAdminList;
