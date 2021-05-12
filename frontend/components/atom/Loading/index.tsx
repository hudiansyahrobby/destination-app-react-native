import React from 'react';
import { StyleSheet, View } from 'react-native';
import Spinner from 'react-native-spinkit';
import { PRIMARY_COLOR } from '../../../constants/color';

const Loading = () => {
  return (
    <View style={styles.container}>
      <Spinner
        isVisible={true}
        size={150}
        type="Circle"
        style={styles.spinner}
        color={PRIMARY_COLOR}
      />
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
    justifyContent: 'center',
  },
  spinner: { alignSelf: 'center' },
});
