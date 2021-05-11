import React from 'react';
import { StyleSheet, View } from 'react-native';
import { PRIMARY_COLOR } from '../../../constants/color';
import { capitalizeEachWord } from '../../../helpers/capitalizeEachWord';
import { IUserProfile } from '../../../types/UserType';
import Avatar from '../../atom/Avatar';
import { Subtitle, Title } from '../../atom/Typography';

interface SettingHeaderProps {
  user: IUserProfile;
}

const SettingHeader: React.FC<SettingHeaderProps> = ({ user }) => {
  return (
    <View style={styles.container}>
      <Avatar
        title={user?.displayName[0]?.toUpperCase()}
        size={100}
        rounded
        source={{
          uri:
            user.photoURL ||
            'https://st.depositphotos.com/2101611/3925/v/600/depositphotos_39258143-stock-illustration-businessman-avatar-profile-picture.jpg',
        }}
      />
      <View style={styles.name}>
        <Title size="md" style={{ color: PRIMARY_COLOR }}>
          {capitalizeEachWord(user?.displayName)}
        </Title>

        <Subtitle size="sm">{user?.email}</Subtitle>
      </View>
    </View>
  );
};

export default SettingHeader;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    marginBottom: 20,
  },
  name: {
    marginLeft: 20,
  },
});
