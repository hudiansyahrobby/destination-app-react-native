import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

interface HorizontalScrollProps {
  children: React.ReactNode;
}

const HorizontalScroll: React.FC<HorizontalScrollProps> = ({ children }) => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator
      alwaysBounceHorizontal
      style={styles.container}>
      {children}
    </ScrollView>
  );
};

export default HorizontalScroll;

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    marginHorizontal: 15,
  },
});
