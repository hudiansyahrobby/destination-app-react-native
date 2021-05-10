import React from 'react';
import { CategoryForm } from '../../molecules';
import { Title } from '../../atom/Typography';
import { StyleSheet } from 'react-native';

const Category = () => {
  return (
    <>
      <Title h1Style={styles.title}>Tambah Kategori</Title>
      <CategoryForm />
    </>
  );
};

export default Category;

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontSize: 38,
  },
});
