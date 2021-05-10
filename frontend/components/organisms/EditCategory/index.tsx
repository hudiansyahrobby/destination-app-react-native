import React from 'react';
import { DestinationForm } from '../../molecules';
import { Title } from '../../atom/Typography';
import { StyleSheet } from 'react-native';

const EditCategory = () => {
  return (
    <>
      <Title h1Style={styles.title}>Edit Kategori</Title>
      <DestinationForm />
    </>
  );
};

export default EditCategory;

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontSize: 38,
  },
});
