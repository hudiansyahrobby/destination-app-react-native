import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface TextWithIconProps {
  icon: string;
  text: string;
}

const TextWithIcon: React.FC<TextWithIconProps> = ({ icon, text }) => {
  return (
    <View style={styles.container}>
      <Ionicons name={icon} size={25} />
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

export default TextWithIcon;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 13,
  },
  text: { marginLeft: 15 },
});
