import { useRoute } from '@react-navigation/core';
import { Formik } from 'formik';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { GRAY_COLOR } from '../../../constants/color';
import useCategory from '../../../hooks/CategoryHooks/useCategory';
import useEditCategory from '../../../hooks/CategoryHooks/useEditCategory';
import categoryValidationSchema from '../../../validations/categoryValidation';
import { SimpleButton } from '../../atom/Button';
import { TextInput } from '../../atom/Form';
import ErrorText from '../../atom/Form/ErrorText';
import Loading from '../../atom/Loading';
import { Title } from '../../atom/Typography';

const EditCategoryForm = () => {
  const [category, setCategory] = React.useState({ id: '', name: '' });

  const { params } = useRoute();
  const categoryId = (params as any).itemList;

  const {
    data,
    isLoading: isCategoryLoading,
    isError: isCategoryError,
  } = useCategory(categoryId);

  const categoryData = data;

  const {
    mutateAsync,
    isLoading: isEditCategoryLoading,
    isError: isEditCategoryError,
  } = useEditCategory();

  React.useEffect(() => {
    setCategory({
      id: categoryData?.id,
      name: categoryData?.name,
    });
  }, [categoryData?.id, categoryData?.name]);

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
    <Formik
      initialValues={category}
      enableReinitialize={true}
      onSubmit={async (values) => {
        const updatedCategory = {
          id: categoryId,
          name: values.name,
        };
        await mutateAsync(updatedCategory);
      }}
      validationSchema={categoryValidationSchema}>
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        touched,
        errors,
      }) => (
        <>
          <View style={styles.wrapper}>
            <TextInput
              label="Nama Kategori"
              onChangeText={handleChange('name')}
              onBlur={handleBlur('name')}
              value={values.name}
              placeholder="Nama Kategori"
              leftIcon={
                <Ionicons name="aperture" size={24} color={GRAY_COLOR} />
              }
            />
            {errors.name && touched.name && <ErrorText message={errors.name} />}
            <View style={styles.button}>
              <SimpleButton
                title="Edit Kategori"
                onPress={handleSubmit}
                loading={isEditCategoryLoading}
              />
            </View>
          </View>
        </>
      )}
    </Formik>
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
  button: {
    marginTop: 10,
  },
});
