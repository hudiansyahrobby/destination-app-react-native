import { useScrollToTop } from '@react-navigation/native';
import React from 'react';
import { NativeScrollEvent, StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import { PRIMARY_COLOR } from '../../../constants/color';
import useDestinations from '../../../hooks/DestinationHooks/useDestinations';
import Loading from '../../atom/Loading';
import { Title } from '../../atom/Typography';
import { DestinationList } from '../../organisms/';

const Home = () => {
  const ref = React.useRef(null);

  useScrollToTop(ref);
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isError,
    isLoading,
  } = useDestinations();

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return (
      <View style={styles.text}>
        <Title size="sm">Error..</Title>
      </View>
    );
  }

  const isCloseToBottom = ({
    layoutMeasurement,
    contentOffset,
    contentSize,
  }: NativeScrollEvent) => {
    const paddingToBottom = 20;
    return (
      layoutMeasurement.height + contentOffset.y >=
      contentSize.height - paddingToBottom
    );
  };

  return (
    <ScrollView
      contentContainerStyle={styles.scrollView}
      ref={ref}
      onScroll={({ nativeEvent }) => {
        if (isCloseToBottom(nativeEvent)) {
          if (hasNextPage) {
            fetchNextPage();
          }
        }
      }}
      scrollEventThrottle={400}>
      <View style={styles.container}>
        <Title size="md" position="center">
          Daftar Tempat Wisata
        </Title>
        <DestinationList destinationList={data?.pages} />

        <Button
          containerStyle={styles.button}
          title="Tidak Ada Data Lagi Untuk Dimuat"
          type="clear"
          loading={isFetchingNextPage}
          titleStyle={{ color: PRIMARY_COLOR }}
          loadingProps={{ color: PRIMARY_COLOR, size: 50 }}
        />
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingVertical: 30,
    minHeight: '100%',
  },
  scrollView: { flexGrow: 1 },
  text: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  button: { marginTop: 10 },
});
