import React from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';
import { AirbnbRating, AirbnbRatingProps } from 'react-native-elements';

type RatingProps = AirbnbRatingProps & {
  rating: number;
  position?: 'left' | 'center';
  otherStyle?: ViewStyle;
};

const Rating: React.FC<RatingProps> = (
  { rating = 5, size = 17, position = 'left', otherStyle },
  props
) => {
  const containerStyle = {
    ...styles.starContainer,
    ...styles[position],
    ...otherStyle,
  };
  return (
    <View style={containerStyle}>
      <AirbnbRating
        count={5}
        defaultRating={rating}
        size={size}
        showRating={false}
        {...props}
      />
    </View>
  );
};

export default Rating;

const styles = StyleSheet.create({
  starContainer: {
    display: 'flex',
    marginTop: -8,
    marginBottom: 10,
  },
  left: {
    alignItems: 'flex-start',
  },
  center: {
    alignItems: 'center',
  },
});
