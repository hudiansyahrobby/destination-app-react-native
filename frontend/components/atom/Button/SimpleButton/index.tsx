import React from 'react';
import { StyleSheet } from 'react-native';
import { Button, ButtonProps } from 'react-native-elements';
import { PRIMARY_COLOR } from '../../../../constants/color';

const SimpleButton: React.FC<ButtonProps> = props => {
  return <Button buttonStyle={styles.button} {...props} />;
};

export default SimpleButton;

const styles = StyleSheet.create({
  button: {
    borderRadius: 10,
    height: 55,
    backgroundColor: PRIMARY_COLOR,
  },
});
