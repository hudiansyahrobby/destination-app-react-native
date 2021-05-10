import { useRoute } from '@react-navigation/core';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { GRAY_COLOR } from '../../../constants/color';
import useCategory from '../../../hooks/CategoryHooks/useCategory';
import useEditCategory from '../../../hooks/CategoryHooks/useEditCategory';
import { SimpleButton } from '../../atom/Button';
import { TextInput } from '../../atom/Form';
import Loading from '../../atom/Loading';
import { Title } from '../../atom/Typography';

const EditCategoryForm = () => {
  const [category, setCategory] = React.useState('');

  const { params } = useRoute();
  const categoryId = (params as any).itemList;
  console.log('CATEGORY ID', categoryId);
  const {
    data,
    isLoading: isCategoryLoading,
    isError: isCategoryError,
  } = useCategory(categoryId);

  const {
    mutateAsync,
    isLoading: isEditCategoryLoading,
    isError: isEditCategoryError,
  } = useEditCategory();

  const categoryData = data;
  console.log('category', category);

  React.useEffect(() => {
    // console.log('USE EFFECT', categoryData);
    setCategory(categoryData?.name);
  }, []);

  const onSubmit = async () => {
    const updatedCategory = {
      id: categoryId,
      name: category,
    };
    console.log('UPDATeD CATEGORY', updatedCategory);
    await mutateAsync(updatedCategory);
  };

  const onInputChange = (inputValue: string) => {
    setCategory(inputValue);
  };

  if (isCategoryLoading) {
    return <Loading />;
  }

  if (isCategoryError) {
    return (
      <View style={styles.text}>
        <Title size="sm">Error..</Title>
      </View>
    );
  }

  return (
    <View style={styles.wrapper}>
      <TextInput
        autoFocus
        label="Nama Kategori"
        placeholder="Nama Kategori"
        defaultValue={data.name}
        onChangeText={(value) => onInputChange(value)}
        leftIcon={<Ionicons name="aperture" size={24} color={GRAY_COLOR} />}
      />

      <SimpleButton
        title="Edit Kategori"
        loading={isEditCategoryLoading}
        onPress={onSubmit}
      />
    </View>
  );
};

export default EditCategoryForm;

const styles = StyleSheet.create({
  wrapper: {
    marginVertical: 30,
  },
  text: {
    marginHorizontal: 20,
    marginTop: 20,
  },
});
