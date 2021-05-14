import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Image } from 'react-native-elements';
import { IDestination } from '../../../types/DestinationType';
import CarouselCards from '../../atom/Carousel';
import Rating from '../../atom/Rating';
import { Subtitle, TextWithIcon, Title } from '../../atom/Typography';

interface DetailHeaderProps {
  destination: IDestination;
}

const DetailHeader: React.FC<DetailHeaderProps> = ({ destination }) => {
  return (
    <View>
      <Image
        style={styles.image}
        source={{
          uri:
            (destination.images[0] as any)?.imageUrl ||
            'https://ami-sni.com/wp-content/themes/consultix/images/no-image-found-360x250.png',
        }}
      />

      <Title size="md" style={styles.title}>
        {destination?.name}
      </Title>
      <Rating size={22} isDisabled />
      <TextWithIcon icon="globe" text={destination?.province} />
      <TextWithIcon icon="business" text={destination?.city} />
      <Title size="sm" style={styles.title}>
        Tentang destinasi
      </Title>
      <Subtitle size="sm">{destination?.description}</Subtitle>
      <CarouselCards images={destination.images} />
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
});
