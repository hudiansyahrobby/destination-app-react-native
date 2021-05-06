import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { GRAY_COLOR } from '../../../../constants/color';

interface DividerWithTextProps {
  text: string;
}
const DividerWithText: React.FC<DividerWithTextProps> = ({ text }) => {
  return (
    <View style={styles.container}>
      <View style={styles.line} />
      <Text style={styles.text}>{text}</Text>
      <View style={styles.line} />
    </View>
  );
};

export default DividerWithText;

const styles = StyleSheet.create({
  container: { flexDirection: 'row', marginVertical: 30 },
  line: {
    backgroundColor: GRAY_COLOR,
    height: 2,
    flex: 1,
    alignSelf: 'center',
  },
  text: {
    alignSelf: 'center',
    paddingHorizontal: 5,
    fontSize: 20,
    color: GRAY_COLOR,
  },
});
