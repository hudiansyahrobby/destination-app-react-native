import React from 'react';
import { View, StyleSheet, Dimensions, Image } from 'react-native';

export const SLIDER_WIDTH = Dimensions.get('window').width - 60;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH);

const CarouselCardItem = ({ item, index }: any) => {
  return (
    <View style={styles.container} key={index}>
      <Image source={{ uri: item.imgUrl }} style={styles.image} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 8,
    width: SLIDER_WIDTH,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
    marginVertical: 20,
  },
  image: {
    justifyContent: 'center',
    alignItems: 'center',
    width: ITEM_WIDTH,
    height: 300,
    resizeMode: 'cover',
  },
});

export default CarouselCardItem;
