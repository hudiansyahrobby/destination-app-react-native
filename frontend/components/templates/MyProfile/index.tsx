import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useSelector } from 'react-redux';
import useUser from '../../../hooks/UserHooks/useUser';
import { IUserProfile } from '../../../types/UserType';
import DividerLine from '../../atom/Divider/DividerLine';
import HorizontalScroll from '../../atom/HorizontalScroll';
import Loading from '../../atom/Loading';
import { Subtitle, Title } from '../../atom/Typography';
import { ProfileCard } from '../../molecules';

const MyProfile = () => {
  const { user: loggedInUser } = useSelector((state: any) => state.user);
  const userId = loggedInUser.uid;

  const { data, isError, isLoading } = useUser(userId);

  const user: IUserProfile = data;

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return (
      <View style={styles.text}>
        <Title size="sm">Error</Title>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ProfileCard
        name={user.displayName}
        country={user.country}
        email={user.email}
        image={user.photoURL}
      />
      <DividerLine />
      <View style={styles.about}>
        <Title size="md">Tentang Saya</Title>
        <Subtitle size="sm" position="justify">
          {user.about || 'Tidak ada deskripsi'}
        </Subtitle>
      </View>
      <HorizontalScroll>
        {/* <DestinationCard />
        <DestinationCard />
        <DestinationCard /> */}
      </HorizontalScroll>
    </View>
  );
};

export default MyProfile;

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    paddingBottom: 40,
    backgroundColor: 'white',
    minHeight: '100%',
  },
  about: {
    marginHorizontal: 25,
    marginTop: 25,
  },
  text: {
    marginHorizontal: 20,
    marginTop: 20,
  },
});
