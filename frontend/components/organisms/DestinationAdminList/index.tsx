import React from 'react';
import { StyleSheet, View } from 'react-native';
import { UseMutateAsyncFunction } from 'react-query';
import Lists from '../../molecules/Lists';

interface DestinationAdminListProps {
  destinationList: any;
  onDelete: UseMutateAsyncFunction<void, unknown, string, unknown>;
}

const DestinationAdminList: React.FC<DestinationAdminListProps> = ({
  destinationList,
  onDelete,
}) => {
  return (
    <>
      <View style={styles.container}>
        {destinationList?.map((destinations: any, index: number) => (
          <Lists
            destinations={destinations?.data}
            onDelete={onDelete}
            key={index}
          />
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
