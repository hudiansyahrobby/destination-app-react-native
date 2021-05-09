import React from 'react';
import { StyleSheet } from 'react-native';
import { capitalizeEachWord } from '../../../helpers/capitalizeEachWord';
import Avatar from '../../atom/Avatar';
import { Subtitle, Title } from '../../atom/Typography';

interface ProfileCardProps {
  country?: string;
  name: string;
  email: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ name, country, email }) => {
  return (
    <>
      <Avatar
        title={name[0].toUpperCase()}
        size="xlarge"
        placeholderStyle={styles.imagePlaceholder}
        rounded
        avatarStyle={styles.avatar}
      />
      <Title position="center" style={styles.title}>
        {capitalizeEachWord(name)}
      </Title>
      {country ? (
        <Subtitle position="center">{capitalizeEachWord(country)}</Subtitle>
      ) : (
        <Subtitle position="center">{email}</Subtitle>
      )}
    </>
  );
};

export default ProfileCard;

const styles = StyleSheet.create({
  title: { marginTop: 10 },
  avatar: {
    borderWidth: 7,
    borderColor: '#D1D5DB',
    borderRadius: 100,
  },
  imagePlaceholder: { backgroundColor: '#6366F1' },
});
