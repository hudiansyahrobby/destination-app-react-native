import { useScrollToTop } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { EditDestination as EditDestinationForm } from '../../organisms/';

const EditDestination = () => {
  const ref = React.useRef(null);

  useScrollToTop(ref);

  return (
    <ScrollView contentContainerStyle={styles.scrollView} ref={ref}>
      <View style={styles.container}>
        <EditDestinationForm />
      </View>
    </ScrollView>
  );
};

export default EditDestination;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingTop: 60,
    minHeight: '100%',
  },
  scrollView: { flexGrow: 1 },
});
