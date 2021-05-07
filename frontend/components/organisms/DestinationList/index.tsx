import React from 'react';
import { StyleSheet, View } from 'react-native';
import useDestinations from '../../../hooks/DestinationHooks/useDestinations';
import { IDestination } from '../../../types/DestinationType';
import { Title } from '../../atom/Typography';
import { DestinationCard } from '../../molecules/';

const DestinationList = () => {
  const { data, isLoading, isError } = useDestinations();

  if (isLoading) {
    return (
      <View style={styles.text}>
        <Title size="sm">Loading...</Title>
      </View>
    );
  }

  if (isError) {
    return (
      <View style={styles.text}>
        <Title size="sm">Loading...</Title>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {(data as any).map((destination: IDestination) => {
        return (
          <View style={styles.child}>
            <DestinationCard destination={destination} />
          </View>
        );
      })}
    </View>
  );
};

export default DestinationList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 20,
  },
  child: {
    width: '50%',
  },
  text: {
    marginHorizontal: 20,
    marginTop: 20,
  },
});
