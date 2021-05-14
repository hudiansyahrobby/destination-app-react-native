import React from 'react';
import { StyleSheet, View } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import CarouselCardItem, { SLIDER_WIDTH, ITEM_WIDTH } from './CarouselCardItem';

interface CarouselCardsProps {
  images: string[];
}

const CarouselCards: React.FC<CarouselCardsProps> = ({ images }) => {
  const [index, setIndex] = React.useState(0);
  const isCarousel = React.useRef(null);
  const data = images.map((image) => {
    return {
      imgUrl: (image as any).imageUrl,
    };
  });

  return (
    <View>
      <Carousel
        layout="tinder"
        layoutCardOffset={9}
        ref={isCarousel}
        data={data}
        renderItem={CarouselCardItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        onSnapToItem={(indexItem) => setIndex(indexItem)}
        useScrollView={true}
        loop={true}
      />

      <Pagination
        dotsLength={data.length}
        activeDotIndex={index}
        dotStyle={styles.dot}
        carouselRef={undefined}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
        tappableDots={true}
      />
    </View>
  );
};

export default CarouselCards;

const styles = StyleSheet.create({
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.92)',
  },
});
