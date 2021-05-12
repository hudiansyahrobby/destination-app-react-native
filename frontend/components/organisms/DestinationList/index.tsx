import React from 'react';
import { StyleSheet, View } from 'react-native';
import { IDestination } from '../../../types/DestinationType';
import { DestinationCard } from '../../molecules/';

interface DestinationListProps {
  destinationList: any;
}

const DestinationList: React.FC<DestinationListProps> = ({
  destinationList,
}) => {
  return (
    <View style={styles.container}>
      {destinationList?.map((destinations: any) => {
        return destinations?.data?.map((destination: IDestination) => {
          return (
            <View style={styles.child} key={destination.id}>
              <DestinationCard destination={destination} />
            </View>
          );
        });
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
