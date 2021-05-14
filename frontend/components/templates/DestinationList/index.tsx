import { useScrollToTop } from '@react-navigation/native';
import React from 'react';
import { NativeScrollEvent, StyleSheet, View } from 'react-native';
import { Button } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import { PRIMARY_COLOR } from '../../../constants/color';
import useDeleteDestination from '../../../hooks/DestinationHooks/useDeleteDestination';
import useDestinations from '../../../hooks/DestinationHooks/useDestinations';
import Loading from '../../atom/Loading';
import SearchItem from '../../atom/SearchItem';
import { Title } from '../../atom/Typography';
import { TitleWithSubtitle } from '../../molecules';
import { DestinationAdminList } from '../../organisms/';

const DestinationList = () => {
  const ref = React.useRef(null);
  const [search, setSearch] = React.useState<string>('');
  const [destination, setDestination] = React.useState<string>('');

  useScrollToTop(ref);

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isError: isDestinationError,
    error,
    isLoading: isDestinationLoading,
  } = useDestinations(destination);

  const {
    isLoading: isDeleteDestinationLoading,
    isError: isDeleteDestinationError,
    mutateAsync: deleteDestination,
  } = useDeleteDestination();

  if (isDestinationLoading || isDeleteDestinationLoading) {
    return <Loading />;
  }

  if (isDestinationError || isDeleteDestinationError) {
    const customError: any = error;
    const appError = customError?.response?.data?.message;
    return (
      <View style={styles.text}>
        <Title size="sm">{appError}</Title>
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

  const updateSearch = (value: string) => {
    setSearch(value);
  };

  const onSearch = () => {
    setDestination(search);
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
        <TitleWithSubtitle title="Daftar Destinasi" subtitle="Cari Destinasi" />
        <SearchItem
          placeholder="Cari Destinasi"
          value={search}
          onChangeText={updateSearch}
          onSubmit={onSearch}
        />
        <DestinationAdminList
          destinationList={data?.pages}
          onDelete={deleteDestination}
        />
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

export default DestinationList;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingHorizontal: 30,
    paddingVertical: 30,
    minHeight: '100%',
  },
  scrollView: { flexGrow: 1 },
  button: { marginTop: 10 },
  text: {
    marginHorizontal: 20,
    marginTop: 20,
  },
});
