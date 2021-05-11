import React from 'react';
import { EditDestinationForm } from '../../molecules';
import { Title } from '../../atom/Typography';
import { StyleSheet } from 'react-native';

const EditDestination = () => {
  return (
    <>
      <Title h1Style={styles.title}>Edit Destinasi</Title>
      <EditDestinationForm />
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
