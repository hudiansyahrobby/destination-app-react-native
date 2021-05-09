import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Avatar, ListItem } from 'react-native-elements';
import { IDestination } from '../../../types/DestinationType';

interface ListsProps {
  destinations: IDestination[];
}

const Lists: React.FC<ListsProps> = ({ destinations }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {destinations?.map((destination) => (
        <ListItem
          key={destination.id}
          bottomDivider
          topDivider
          onPress={() =>
            navigation.navigate('Detail', {
              itemId: destination.id,
            })
          }>
          <Avatar
            source={{
              uri:
                'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
            }}
            rounded
          />
          <ListItem.Content>
            <ListItem.Title>{destination.name}</ListItem.Title>
            <ListItem.Subtitle>
              {destination.province} - {destination.city}
            </ListItem.Subtitle>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
      ))}
    </View>
  );
};

export default Lists;

const styles = StyleSheet.create({
  container: { marginVertical: 20 },
});
