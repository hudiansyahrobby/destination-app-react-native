import { useScrollToTop } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Title } from '../../atom/Typography';
import { DestinationList } from '../../organisms/';

const Home = () => {
  const ref = React.useRef(null);

  useScrollToTop(ref);

  return (
    <ScrollView contentContainerStyle={styles.scrollView} ref={ref}>
      <View style={styles.container}>
        <Title size="md" position="center">
          Daftar Tempat Wisata
        </Title>
        <DestinationList />
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingTop: 30,
    minHeight: '100%',
  },
  scrollView: { flexGrow: 1 },
});
