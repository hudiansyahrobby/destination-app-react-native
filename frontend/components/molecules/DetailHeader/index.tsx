import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Image } from 'react-native-elements';
import CarouselCards from '../../atom/Carousel';
import Rating from '../../atom/Rating';
import { Title, TextWithIcon, Subtitle } from '../../atom/Typography';

const DetailHeader = () => {
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
        Pantai Ampenan
      </Title>
      <Rating rating={5} size={22} />
      <TextWithIcon icon="globe" text="Provinsi NTB" />
      <TextWithIcon icon="business" text="Kota Mataram" />
      <Title size="sm" style={styles.title}>
        Tentang destinasi
      </Title>
      <Subtitle size="sm">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita
        necessitatibus temporibus, inventore ullam quidem omnis nam ipsam culpa
        possimus corrupti. Tempore aliquid fuga minima nisi quam, laboriosam
        debitis qui officiis odio porro magni praesentium provident sequi
        temporibus fugit eaque fugiat magnam delectus tenetur corrupti officia,
        neque dolorem? Natus quam iure vero blanditiis quo minus sit tempore
        assumenda qui, molestiae accusamus facere eveniet nulla dicta earum
        mollitia corporis illum iste modi minima asperiores id impedit similique
        dolorum? Modi cum facilis optio architecto sequi facere porro
        praesentium repudiandae error saepe aliquid nisi, dolorum ut itaque
        deserunt vero dolores alias nostrum? Nesciunt, optio?
      </Subtitle>
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
});
