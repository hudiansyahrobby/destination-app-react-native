import React from 'react';
import { StyleSheet } from 'react-native';
import { Divider, DividerProps } from 'react-native-elements';
import { GRAY_COLOR } from '../../../../constants/color';

type DividerLineProps = DividerProps;

const DividerLine: React.FC<DividerLineProps> = (props) => {
  return <Divider style={styles.divider} {...props} />;
};

export default DividerLine;

const styles = StyleSheet.create({
  divider: {
    backgroundColor: GRAY_COLOR,
    height: 1,
  },
});
