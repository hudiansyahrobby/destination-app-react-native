import React from 'react';
import { StyleSheet, View } from 'react-native';
import Spinner from 'react-native-spinkit';
import { PRIMARY_COLOR } from '../../../constants/color';

const Loading = () => {
  return (
    <View style={styles.spinner}>
      <Spinner
        isVisible={true}
        size={150}
        type="Circle"
        color={PRIMARY_COLOR}
      />
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
  spinner: {
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    height: '100%',
  },
});
