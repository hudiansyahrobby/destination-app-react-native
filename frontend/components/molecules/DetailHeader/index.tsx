import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Image } from 'react-native-elements';
import useDestination from '../../../hooks/DestinationHooks/useDestination';
import { IDestination } from '../../../types/DestinationType';
import CarouselCards from '../../atom/Carousel';
import Loading from '../../atom/Loading';
import Rating from '../../atom/Rating';
import { Title, TextWithIcon, Subtitle } from '../../atom/Typography';

interface DetailHeaderProps {
  destinationId: string;
}

const DetailHeader: React.FC<DetailHeaderProps> = ({ destinationId }) => {
  const { isLoading, data, isError } = useDestination(destinationId);
  const destination: IDestination = data;

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return (
      <View style={styles.text}>
        <Title size="sm">Error</Title>
      </View>
    );
  }

  return (
    <View>
      <Image
        style={styles.image}
        source={{
          uri:
            'https://pix10.agoda.net/hotelImages/301716/-1/fe9724d8fb4da3dd4590353bd771a276.jpg?s=1024x768',
        }}
      />

      <Title size="md" style={styles.title}>
        {destination?.name}
      </Title>
      <Rating rating={5} size={22} />
      <TextWithIcon icon="globe" text={destination?.province} />
      <TextWithIcon icon="business" text={destination?.city} />
      <Title size="sm" style={styles.title}>
        Tentang destinasi
      </Title>
      <Subtitle size="sm">{destination?.description}</Subtitle>
      <CarouselCards />
    </View>
  );
};

export default DetailHeader;

const styles = StyleSheet.create({
  image: { borderRadius: 10, height: 250, width: '100%' },
  title: {
    marginTop: 20,
    marginBottom: 13,
  },
  text: {
    marginHorizontal: 20,
    marginTop: 20,
  },
});
