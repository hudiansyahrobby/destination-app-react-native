import React from 'react';
import { StyleSheet } from 'react-native';
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
      <Avatar title={name[0].toUpperCase()} size="xlarge" />
      <Title position="center" style={styles.title}>
        {name}
      </Title>
      {country ? (
        <Subtitle position="center">{country}</Subtitle>
      ) : (
        <Subtitle position="center">{email}</Subtitle>
      )}
    </>
  );
};

export default ProfileCard;

const styles = StyleSheet.create({
  title: { marginTop: 10 },
});
