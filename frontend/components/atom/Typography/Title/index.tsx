import React from 'react';
import { StyleSheet } from 'react-native';
import { Text, TextProps } from 'react-native-elements';
import { BLACK_COLOR, PRIMARY_COLOR } from '../../../../constants/color';

type TitleProps = TextProps & {
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
  position?: 'left' | 'center';
};

const Title: React.FC<TitleProps> = (props) => {
  const { children, size = 'lg', style, position = 'left', ...rest } = props;
  return (
    <Text
      h1
      h1Style={[styles.title, style, styles[size], styles[position]]}
      {...rest}>
      {children}
    </Text>
  );
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    color: BLACK_COLOR,
  },
  lg: {
    fontSize: 38,
  },
  md: {
    fontSize: 24,
  },
  sm: {
    fontSize: 18,
    color: PRIMARY_COLOR,
  },
  left: {
    textAlign: 'left',
  },
  center: {
    textAlign: 'center',
  },
});
