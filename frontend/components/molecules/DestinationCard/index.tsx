import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { StyleSheet } from 'react-native';
import { Card, Text } from 'react-native-elements';
import { IDestination } from '../../../types/DestinationType';
import Rating from '../../atom/Rating';

interface DestinationCardProps {
  destination: IDestination;
}

const DestinationCard: React.FC<DestinationCardProps> = ({ destination }) => {
  const navigation = useNavigation();

  return (
    <Card containerStyle={styles.card}>
      <Card.Image
        style={styles.image}
        source={{
          uri:
            'https://pix10.agoda.net/hotelImages/301716/-1/fe9724d8fb4da3dd4590353bd771a276.jpg?s=1024x768',
        }}
      />
      <Card.Title
        style={styles.title}
        onPress={() =>
          navigation.navigate('Detail', {
            itemId: destination.id,
          })
        }>
        {destination?.name}
      </Card.Title>
      <Rating rating={5} />
      <Text style={styles.description}>
        {destination?.description?.substring(0, 149)}
      </Text>
    </Card>
  );
};

export default DestinationCard;

const styles = StyleSheet.create({
  card: {
    marginHorizontal: 4,
    marginVertical: 10,
    borderRadius: 10,
    maxWidth: '100%',
  },
  title: {
    textAlign: 'left',
    marginTop: 10,
    fontSize: 16,
  },
  image: { borderRadius: 10 },
  description: {
    marginBottom: 24,
    fontSize: 13,
  },
});
