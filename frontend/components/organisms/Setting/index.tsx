import React from 'react';
import { StyleSheet, View } from 'react-native';
import useMyProfile from '../../../hooks/UserHooks/useMyProfile';
import Loading from '../../atom/Loading';
import { Title } from '../../atom/Typography';
import { SettingHeader } from '../../molecules';
import SettingBody from '../../molecules/SettingBody';

const Setting = () => {
  const { isLoading, isError, data } = useMyProfile();

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return (
      <View style={styles.text}>
        <Title size="sm">Error...</Title>
      </View>
    );
  }

  return (
    <View>
      <SettingHeader user={data} />
      <View style={styles.body}>
        <SettingBody />
      </View>
    </View>
  );
};

export default Setting;

const styles = StyleSheet.create({
  body: {
    marginVertical: 20,
  },
  text: {
    marginHorizontal: 20,
    marginTop: 20,
  },
});
