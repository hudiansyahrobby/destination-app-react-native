import React from 'react';
import { DestinationForm } from '../../molecules';
import { Title } from '../../atom/Typography';
import { StyleSheet } from 'react-native';

const Destination = () => {
  return (
    <>
      <Title h1Style={styles.title}>Tambah Destinasi</Title>
      <DestinationForm />
    </>
  );
};

export default Destination;

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontSize: 38,
  },
});
