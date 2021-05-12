import { Formik } from 'formik';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { showMessage } from 'react-native-flash-message';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { GRAY_COLOR } from '../../../constants/color';
import { capitalizeEachWord } from '../../../helpers/capitalizeEachWord';
import useAddCategory from '../../../hooks/CategoryHooks/useAddCategory';
import categoryValidationSchema from '../../../validations/categoryValidation';
import { SimpleButton } from '../../atom/Button';
import { TextInput } from '../../atom/Form';
import ErrorText from '../../atom/Form/ErrorText';

const CategoryForm = () => {
  const { mutateAsync, isLoading, isError, error } = useAddCategory();

  const addCategoryError: any = error;
  const appError = addCategoryError?.response?.data?.message;

  React.useEffect(() => {
    if (isError) {
      showMessage({
        message: capitalizeEachWord(appError),
        type: 'danger',
      });
    }
  }, [isError, appError]);

  return (
    <Formik
      initialValues={{
        name: '',
      }}
      onSubmit={async (values) => {
        await mutateAsync(values);
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
                title="Tambah Kategori"
                onPress={handleSubmit}
                loading={isLoading}
              />
            </View>
          </View>
        </>
      )}
    </Formik>
  );
};

export default CategoryForm;

const styles = StyleSheet.create({
  wrapper: {
    marginVertical: 30,
  },
  button: {
    marginTop: 10,
  },
});
