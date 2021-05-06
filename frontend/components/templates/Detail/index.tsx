import { useScrollToTop } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import CommentDetail from '../../organisms/CommentDetail';
import DestinationDetail from '../../organisms/DestinationDetail';

const Detail = () => {
  const ref = React.useRef(null);

  useScrollToTop(ref);

  return (
    <ScrollView contentContainerStyle={styles.scrollView} ref={ref}>
      <View style={styles.container}>
        <DestinationDetail />
        <CommentDetail />
      </View>
    </ScrollView>
  );
};

export default Detail;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingHorizontal: 30,
    paddingTop: 60,
    minHeight: '100%',
  },
  scrollView: { flexGrow: 1 },
});
