import React from 'react';
import { DestinationForm } from '../../molecules';
import { Title } from '../../atom/Typography';
import { StyleSheet } from 'react-native';

const EditDestination = () => {
  return (
    <>
      <Title h1Style={styles.title}>Edit Destinasi</Title>
      <DestinationForm />
    </>
  );
};

export default EditDestination;

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontSize: 38,
  },
});
