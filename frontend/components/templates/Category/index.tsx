import { useScrollToTop } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Category as CategoryForm } from '../../organisms/';

const Category = () => {
  const ref = React.useRef(null);

  useScrollToTop(ref);

  return (
    <ScrollView contentContainerStyle={styles.scrollView} ref={ref}>
      <View style={styles.container}>
        <CategoryForm />
      </View>
    </ScrollView>
  );
};

export default Category;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingHorizontal: 30,
    paddingTop: 60,
    minHeight: '100%',
  },
  scrollView: { flexGrow: 1 },
});
