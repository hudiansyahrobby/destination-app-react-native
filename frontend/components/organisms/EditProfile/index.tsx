import React from 'react';
import { EditProfileForm } from '../../molecules';
import { Title } from '../../atom/Typography';
import { StyleSheet } from 'react-native';

const EditProfile = () => {
  return (
    <>
      <Title h1Style={styles.title}>Edit Profil</Title>
      <EditProfileForm />
    </>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontSize: 38,
  },
});
