import React from 'react';
import { StyleSheet, View } from 'react-native';
import { SettingHeader } from '../../molecules';
import { useNavigation } from '@react-navigation/core';
import SettingBody from '../../molecules/SettingBody';

const Setting = () => {
  const navigation = useNavigation();

  return (
    <View>
      <SettingHeader />
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
});
