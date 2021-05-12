import React from 'react';
import { StyleSheet, View } from 'react-native';
import SearchItem from '../../atom/SearchItem';
import { TitleWithSubtitle } from '../../molecules';
import Lists from '../../molecules/Lists';

interface DestinationAdminListProps {
  destinationList: any;
}
const DestinationAdminList: React.FC<DestinationAdminListProps> = ({
  destinationList,
}) => {
  return (
    <>
      <TitleWithSubtitle title="Daftar Destinasi" subtitle="Cari Destinasi" />
      <SearchItem />
      <View style={styles.container}>
        {destinationList?.map((destinations: any) => (
          <Lists destinations={destinations?.data} />
        ))}
      </View>
    </>
  );
};

export default DestinationAdminList;

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    marginBottom: 15,
  },
});
