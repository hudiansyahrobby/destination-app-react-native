import React from 'react';
import { StyleSheet, View } from 'react-native';
import { SettingHeader } from '../../molecules';
import SettingBody from '../../molecules/SettingBody';

const Setting = () => {
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
