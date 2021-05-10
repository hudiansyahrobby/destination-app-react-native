import React from 'react';
import { StyleSheet, View } from 'react-native';
import useCategories from '../../../hooks/CategoryHooks/useCategories';
import useDestinations from '../../../hooks/DestinationHooks/useDestinations';
import { ICategory } from '../../../types/CategoryType';
import { Title } from '../../atom/Typography';
import { TitleWithSubtitle } from '../../molecules';
import { CategoryList } from '../../molecules';

const CategoryAdminList = () => {
  const { data, isLoading, isError } = useCategories();

  const categories: ICategory[] = data;

  if (isLoading) {
    return (
      <View style={styles.text}>
        <Title size="sm">Loading...</Title>
      </View>
    );
  }

  if (isError) {
    return (
      <View style={styles.text}>
        <Title size="sm">Loading...</Title>
      </View>
    );
  }

  return (
    <>
      <TitleWithSubtitle title="Daftar Kategori" subtitle="Cari Kategori" />
      <CategoryList categories={categories} />
    </>
  );
};

export default CategoryAdminList;

const styles = StyleSheet.create({
  text: {
    marginHorizontal: 20,
    marginTop: 20,
  },
});
