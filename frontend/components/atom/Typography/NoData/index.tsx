import React from 'react';
import { StyleSheet } from 'react-native';
import { Text, TextProps } from 'react-native-elements';
import { PRIMARY_COLOR } from '../../../../constants/color';

type NoDataProps = TextProps & {
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
  position?: 'left' | 'center';
};

const NoData: React.FC<NoDataProps> = (props) => {
  const { children, style, ...rest } = props;
  return (
    <Text h1 h1Style={[styles.text, style]} {...rest}>
      {children}
    </Text>
  );
};

export default NoData;

const styles = StyleSheet.create({
  text: {
    fontSize: 17,
    fontWeight: '700',
    color: PRIMARY_COLOR,
    textAlign: 'center',
    width: '100%',
  },
});
