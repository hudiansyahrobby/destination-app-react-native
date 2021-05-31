import { useNavigation, useRoute } from '@react-navigation/core';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { capitalizeEachWord } from '../../../helpers/capitalizeEachWord';
import useUser from '../../../hooks/UserHooks/useUser';
import { IUserProfile } from '../../../types/UserType';
import DividerLine from '../../atom/Divider/DividerLine';
import HorizontalScroll from '../../atom/HorizontalScroll';
import Loading from '../../atom/Loading';
import { Subtitle, Title } from '../../atom/Typography';
import { ProfileCard } from '../../molecules';

const Profile = () => {
  const { params } = useRoute();
  const navigation = useNavigation();
  console.log('PARAMS', params);
  const userId = (params as any)?.itemId;
  const headerTitle = capitalizeEachWord((params as any)?.headerTitle);

  React.useEffect(() => {
    navigation.setOptions({
      headerTitle: `Profil ${headerTitle}`,
    });
  }, [headerTitle]);

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
        image={user?.photoURL}
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

export default Profile;

const styles = StyleSheet.create({
  container: {
    marginTop: 60,
    marginBottom: 40,
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
