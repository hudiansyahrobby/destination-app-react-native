import React from 'react';
import { EditCategoryForm } from '../../molecules';
import { Title } from '../../atom/Typography';
import { StyleSheet } from 'react-native';

const EditCategory = () => {
  return (
    <>
      <Title h1Style={styles.title}>Edit Kategori</Title>
      <EditCategoryForm />
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
