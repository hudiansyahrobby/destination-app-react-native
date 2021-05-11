import React from 'react';
import { Text } from 'react-native';
import { TextProps } from 'react-native-elements';
import { StyleSheet } from 'react-native';

type ErrorTextProps = TextProps & {
  message: string;
};

const ErrorText: React.FC<ErrorTextProps> = ({ message, ...props }) => {
  return (
    <Text style={styles.text} {...props}>
      {message}
    </Text>
  );
};

export default ErrorText;

const styles = StyleSheet.create({
  text: {
    color: 'red',
    marginTop: -15,
    marginLeft: 10,
    marginBottom: 5,
  },
});
