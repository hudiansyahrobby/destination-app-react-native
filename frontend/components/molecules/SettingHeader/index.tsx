import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useSelector } from 'react-redux';
import { PRIMARY_COLOR } from '../../../constants/color';
import Avatar from '../../atom/Avatar';
import { Subtitle, Title } from '../../atom/Typography';

const SettingHeader = () => {
  const { user } = useSelector((state: any) => state.user);

  return (
    <View style={styles.container}>
      <Avatar title={user?.displayName[0].toUpperCase()} size={100} />
      <View>
        <Title size="md" style={{ color: PRIMARY_COLOR }}>
          {user?.displayName}
        </Title>

        <Subtitle size="sm">{user?.country || user?.email}</Subtitle>
      </View>
    </View>
  );
};

export default SettingHeader;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginBottom: 20,
  },
});
