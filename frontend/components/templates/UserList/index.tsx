import { useScrollToTop } from '@react-navigation/native';
import React from 'react';
import { NativeScrollEvent, StyleSheet, View } from 'react-native';
import { Button } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import { PRIMARY_COLOR } from '../../../constants/color';
import useUsers from '../../../hooks/UserHooks/useUsers';
import Loading from '../../atom/Loading';
import SearchItem from '../../atom/SearchItem';
import { Title } from '../../atom/Typography';
import { TitleWithSubtitle } from '../../molecules';
import { UserList as UserListProfile } from '../../organisms/';

const UserList = () => {
  const ref = React.useRef(null);

  useScrollToTop(ref);

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isError,
    isLoading,
  } = useUsers();

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
        <TitleWithSubtitle title="Daftar Pengguna" subtitle="Cari Pengguna" />
        <UserListProfile userList={data?.pages} />
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

export default UserList;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingHorizontal: 30,
    paddingTop: 30,
    minHeight: '100%',
  },
  scrollView: { flexGrow: 1 },
  button: { marginTop: 10 },
  text: {
    marginHorizontal: 20,
    marginTop: 20,
  },
});
