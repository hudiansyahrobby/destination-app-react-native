import React from 'react';
import { DestinationCard } from '../../molecules/';
import { StyleSheet, View } from 'react-native';

const DestinationList = () => {
  return (
    <View style={styles.container}>
      {[1, 2, 3, 4, 5].map(() => {
        return (
          <View style={styles.child}>
            <DestinationCard />
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
});
