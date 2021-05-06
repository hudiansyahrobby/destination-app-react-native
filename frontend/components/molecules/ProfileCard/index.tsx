import React from 'react';
import { StyleSheet } from 'react-native';
import Avatar from '../../atom/Avatar';
import { Subtitle, Title } from '../../atom/Typography';

const ProfileCard = () => {
  return (
    <>
      <Avatar title="MT" size="xlarge" />
      <Title position="center" style={styles.title}>
        Mount Thomas
      </Title>
      <Subtitle position="center">New York, USA</Subtitle>
    </>
  );
};

export default ProfileCard;

const styles = StyleSheet.create({
  title: { marginTop: 10 },
});
