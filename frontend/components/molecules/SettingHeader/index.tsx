import React from 'react';
import { StyleSheet, View } from 'react-native';
import { PRIMARY_COLOR } from '../../../constants/color';
import Avatar from '../../atom/Avatar';
import { Subtitle, Title } from '../../atom/Typography';

const SettingHeader = () => {
  return (
    <View style={styles.container}>
      <Avatar title="MZ" size={100} />
      <View>
        <Title size="md" style={{ color: PRIMARY_COLOR }}>
          Mount Thom
        </Title>
        <Subtitle size="sm">New York, USA</Subtitle>
      </View>
    </View>
  );
};

export default SettingHeader;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 20,
  },
});
