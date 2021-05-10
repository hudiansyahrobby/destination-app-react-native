import React from 'react';
import { StyleSheet, View } from 'react-native';
import useCategories from '../../../hooks/CategoryHooks/useCategories';
import { ICategory } from '../../../types/CategoryType';
import Loading from '../../atom/Loading';
import { Title } from '../../atom/Typography';
import { CategoryList, TitleWithSubtitle } from '../../molecules';

const CategoryAdminList = () => {
  const { data, isLoading, isError } = useCategories();

  const categories: ICategory[] = data;

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return (
      <View style={styles.text}>
        <Title size="sm">Error</Title>
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
