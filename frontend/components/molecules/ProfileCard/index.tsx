import React from 'react';
import { StyleSheet } from 'react-native';
import Avatar from '../../atom/Avatar';
import { Subtitle, Title } from '../../atom/Typography';

interface ProfileCardProps {
  country?: string;
  name: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ name, country }) => {
  return (
    <>
      <Avatar title="MT" size="xlarge" />
      <Title position="center" style={styles.title}>
        {name}
      </Title>
      {country && <Subtitle position="center">{country}</Subtitle>}
    </>
  );
};

export default ProfileCard;

const styles = StyleSheet.create({
  title: { marginTop: 10 },
});
