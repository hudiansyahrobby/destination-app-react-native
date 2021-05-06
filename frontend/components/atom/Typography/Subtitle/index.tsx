import React from 'react';
import { StyleSheet } from 'react-native';
import { Text, TextProps } from 'react-native-elements';
import { SECONDARY_COLOR } from '../../../../constants/color';

type SubtitleProps = TextProps & {
  children: React.ReactNode;
  size?: 'sm' | 'md';
  position?: 'left' | 'center' | 'justify';
};

const Subtitle: React.FC<SubtitleProps> = ({
  children,
  size = 'md',
  style,
  position = 'left',
}) => {
  return (
    <Text h2 h2Style={[styles.subtitle, style, styles[size], styles[position]]}>
      {children}
    </Text>
  );
};

export default Subtitle;

const styles = StyleSheet.create({
  subtitle: {
    color: SECONDARY_COLOR,
    lineHeight: 23,
    marginBottom: 25,
  },
  sm: {
    fontSize: 15,
  },
  md: {
    fontSize: 18,
  },
  left: {
    textAlign: 'left',
  },
  center: {
    textAlign: 'center',
  },
  justify: {
    textAlign: 'justify',
  },
});
