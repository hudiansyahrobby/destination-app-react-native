import React from 'react';
import { View } from 'react-native';
import Rating from '../../atom/Rating';
import { Title } from '../../atom/Typography';
import { StyleSheet } from 'react-native';
import { BottomSheet, Input } from 'react-native-elements';

const Comment = () => {
  return (
    <View>
      <Title size="sm">Beri Penilaian</Title>
      <Rating
        rating={5}
        size={35}
        otherStyle={styles.rating}
        position="center"
      />
      <BottomSheet
        isVisible={false}
        modalProps={{ animationType: 'slide' }}
        containerStyle={styles.bottomSheetContainer}>
        <View style={styles.inputContainer}>
          <Input label="Beri komentar" multiline autoFocus />
        </View>
      </BottomSheet>
    </View>
  );
};

export default Comment;

const styles = StyleSheet.create({
  rating: {
    marginBottom: 20,
    marginTop: 20,
  },
  inputContainer: {
    backgroundColor: 'white',
    height: 400,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  bottomSheetContainer: { backgroundColor: 'rgba(0.5, 0.25, 0, 0.2)' },
});
