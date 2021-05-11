import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { ActivityIndicator, StyleSheet } from 'react-native';
import { Card, Text } from 'react-native-elements';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { capitalizeEachWord } from '../../../helpers/capitalizeEachWord';
import { IDestination } from '../../../types/DestinationType';
import Rating from '../../atom/Rating';

interface DestinationCardProps {
  destination: IDestination;
}

const DestinationCard: React.FC<DestinationCardProps> = ({ destination }) => {
  const navigation = useNavigation();

  return (
    <TouchableWithoutFeedback
      onPress={() =>
        navigation.navigate('Detail', {
          itemId: destination.id,
          headerTitle: destination.name,
        })
      }>
      <Card containerStyle={styles.card} key={destination.id}>
        <Card.Image
          style={styles.image}
          source={{
            uri:
              (destination.images[0] as any)?.imageUrl ||
              'https://ami-sni.com/wp-content/themes/consultix/images/no-image-found-360x250.png',
          }}
          PlaceholderContent={<ActivityIndicator />}
        />
        <Card.Title style={styles.title}>
          {capitalizeEachWord(destination?.name)}
        </Card.Title>
        <Rating rating={5} />
        <Text style={styles.description}>
          {destination?.description?.substring(0, 149)}
        </Text>
      </Card>
    </TouchableWithoutFeedback>
  );
};

export default DestinationCard;

const styles = StyleSheet.create({
  card: {
    marginHorizontal: 4,
    marginVertical: 10,
    borderRadius: 10,
    maxWidth: '100%',
    height: 380,
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
