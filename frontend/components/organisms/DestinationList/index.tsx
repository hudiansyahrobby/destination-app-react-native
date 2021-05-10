import React from 'react';
import { StyleSheet, View } from 'react-native';
import useDestinations from '../../../hooks/DestinationHooks/useDestinations';
import { IDestination } from '../../../types/DestinationType';
import Loading from '../../atom/Loading';
import { Title } from '../../atom/Typography';
import { DestinationCard } from '../../molecules/';

const DestinationList = () => {
  const { data, isLoading, isError } = useDestinations();

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return (
      <View style={styles.text}>
        <Title size="sm">Error..</Title>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {(data.data as any).map((destination: IDestination) => {
        return (
          <View style={styles.child} key={destination.id}>
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
