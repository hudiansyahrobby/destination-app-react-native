import React from 'react';
import { StyleSheet } from 'react-native';
import { TextProps, Text } from 'react-native-elements';

type HeaderRightProps = TextProps & {
  text: string;
};

const HeaderRight: React.FC<HeaderRightProps> = props => {
  const { text } = props;
  return (
    <Text style={styles.header} {...props}>
      {text}
    </Text>
  );
};

export default HeaderRight;

const styles = StyleSheet.create({
  header: {
    color: '#ffffff',
    marginRight: 10,
    fontSize: 19,
    fontWeight: 'bold',
    marginEnd: 15,
  },
});
