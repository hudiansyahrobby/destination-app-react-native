import React from 'react';
import { StyleSheet } from 'react-native';
import { Button, ButtonProps } from 'react-native-elements';
import { PRIMARY_COLOR } from '../../../../constants/color';

const UploadButton: React.FC<ButtonProps> = props => {
  return (
    <Button
      {...props}
      type="outline"
      buttonStyle={styles.button}
      titleStyle={styles.title}
    />
  );
};

export default UploadButton;

const styles = StyleSheet.create({
  button: {
    borderRadius: 10,
    height: 250,
    width: '100%',
    marginVertical: 25,
    borderColor: PRIMARY_COLOR,
  },
  title: {
    color: PRIMARY_COLOR,
  },
});
