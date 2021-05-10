import React from 'react';
import { StyleSheet, View } from 'react-native';
import useDestinations from '../../../hooks/DestinationHooks/useDestinations';
import { IDestination } from '../../../types/DestinationType';
import Loading from '../../atom/Loading';
import SearchItem from '../../atom/SearchItem';
import { Title } from '../../atom/Typography';
import { TitleWithSubtitle } from '../../molecules';
import Lists from '../../molecules/Lists';

const DestinationAdminList = () => {
  const { data, isLoading, isError } = useDestinations();

  const destinations: IDestination[] = data.data;

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return (
      <View style={styles.text}>
        <Title size="sm">Error...</Title>
      </View>
    );
  }

  return (
    <>
      <TitleWithSubtitle title="Daftar Destinasi" subtitle="Cari Destinasi" />
      <SearchItem />
      <Lists destinations={destinations} />
    </>
  );
};

export default DestinationAdminList;

const styles = StyleSheet.create({
  text: {
    marginHorizontal: 20,
    marginTop: 20,
  },
});
