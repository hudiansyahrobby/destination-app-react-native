import React from 'react';
import { StyleSheet, View } from 'react-native';
import Avatar from '../../atom/Avatar';
import Rating from '../../atom/Rating';
import { Title } from '../../atom/Typography';

interface CommentHeaderProps {
  rating: number;
  photoURL: string;
  displayName: string;
}

const CommentHeader: React.FC<CommentHeaderProps> = ({
  rating,
  photoURL,
  displayName,
}) => {
  return (
    <View style={styles.wrapper}>
      <Avatar
        title="A"
        size={35}
        rounded
        source={{
          uri: photoURL,
        }}
      />
      <View style={styles.body}>
        <Title size="sm">{displayName}</Title>
        <Rating
          size={15}
          isDisabled
          defaultRating={rating}
          otherStyle={styles.rating}
        />
      </View>
    </View>
  );
};

export default CommentHeader;

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
  },
  body: { marginLeft: 20 },
  rating: { marginLeft: -4, marginTop: 4 },
});
