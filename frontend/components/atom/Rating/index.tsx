import React from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';
import { AirbnbRating, AirbnbRatingProps } from 'react-native-elements';

type RatingProps = AirbnbRatingProps & {
  position?: 'left' | 'center';
  otherStyle?: ViewStyle;
  onRating?: (value: number) => void;
};

const Rating: React.FC<RatingProps> = ({
  size = 17,
  position = 'left',
  otherStyle,
  onRating,
  ...props
}) => {
  const containerStyle = {
    ...styles.starContainer,
    ...styles[position],
    ...otherStyle,
  };
  return (
    <View style={containerStyle}>
      <AirbnbRating
        count={5}
        size={size}
        showRating={false}
        {...props}
        onFinishRating={onRating}
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
