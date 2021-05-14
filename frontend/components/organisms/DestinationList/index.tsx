import React from 'react';
import { StyleSheet, View } from 'react-native';
import { IDestination } from '../../../types/DestinationType';
import NoData from '../../atom/Typography/NoData';
import { DestinationCard } from '../../molecules/';

interface DestinationsProps {
  destinations: IDestination[];
}

export const Destinations: React.FC<DestinationsProps> = ({ destinations }) => {
  return (
    <>
      {destinations?.length !== 0 ? (
        destinations?.map((destination: IDestination) => {
          return (
            <View style={styles.child} key={destination.id}>
              <DestinationCard destination={destination} />
            </View>
          );
        })
      ) : (
        <NoData>Destinasi Tidak Ada</NoData>
      )}
    </>
  );
};

interface DestinationListProps {
  destinationList: any;
}

const DestinationList: React.FC<DestinationListProps> = ({
  destinationList,
}) => {
  return (
    <View style={styles.container}>
      {destinationList?.map((destinations: any, index: number) => {
        return <Destinations destinations={destinations?.data} key={index} />;
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
});
