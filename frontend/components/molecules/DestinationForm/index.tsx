import { Formik } from 'formik';
import React from 'react';
import { ActivityIndicator, Dimensions, StyleSheet, View } from 'react-native';
import { Image } from 'react-native-elements';
import ImagePicker, { ImageOrVideo } from 'react-native-image-crop-picker';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { GRAY_COLOR, PRIMARY_COLOR } from '../../../constants/color';
import { capitalizeEachWord } from '../../../helpers/capitalizeEachWord';
import useCategories from '../../../hooks/CategoryHooks/useCategories';
import useAddDestination from '../../../hooks/DestinationHooks/useAddDestination';
import { ICategory } from '../../../types/CategoryType';
import { IDestination } from '../../../types/DestinationType';
import destinationValidationSchema from '../../../validations/destinationValidation';
import BottomMenu from '../../atom/BottomMenu';
import { SimpleButton, UploadButton } from '../../atom/Button';
import { Select, TextInput } from '../../atom/Form';
import ErrorText from '../../atom/Form/ErrorText';
import HorizontalScroll from '../../atom/HorizontalScroll';
import Loading from '../../atom/Loading';

const win = Dimensions.get('window');

const DestinationForm = () => {
  const [images, setImages] = React.useState<ImageOrVideo[]>();
  const [isVisible, setIsVisible] = React.useState(false);

  const {
    mutateAsync,
    isLoading: isAddDestinationLoading,
    isError: isAddDestinationError,
    error: addDestinationError,
  } = useAddDestination();

  const {
    data: categories,
    isLoading: isCategoriesLoading,
    isError: isCategoriesError,
    error: categoriesError,
  } = useCategories();

  const launchImageLibrary = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
      multiple: true,
    }).then((image) => {
      setImages(image);
      setIsVisible(false);
    });
  };

  const listMenu = () => {
    const menu = [
      {
        title: 'Pilih Gambar Dari Galeri',
        onPress: () => launchImageLibrary(),
        icon: 'images',
      },
      {
        title: 'Batal',
        onPress: () => setIsVisible(false),
        icon: 'close-sharp',
      },
    ];

    return menu;
  };

  const onSubmit = async (destination: Partial<IDestination>) => {
    const { name, province, city, description, categoryId } = destination;

    const data = new FormData();
    data.append('name', name);
    data.append('province', province);
    data.append('city', city);
    data.append('description', description);
    data.append('categoryId', categoryId);
    images?.map((image) => {
      data.append('images', {
        uri: image?.path,
        name: `destination-${Date.now()}-${image.size}-${image.height}.jpg`,
        type: image?.mime,
      });
    });

    await mutateAsync(data);
  };

  if (isCategoriesLoading) {
    return <Loading />;
  }

  const items = categories.map((category: ICategory) => {
    return {
      label: capitalizeEachWord(category.name),
      value: category.id,
      color: 'white',
    };
  });

  console.log('IMAGES', images);
  return (
    <Formik
      initialValues={{
        name: '',
        province: '',
        city: '',
        description: '',
        categoryId: '',
      }}
      onSubmit={async (values) => {
        onSubmit(values);
      }}
      validationSchema={destinationValidationSchema}>
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
              autoFocus
              label="Nama Destinasi"
              onChangeText={handleChange('name')}
              onBlur={handleBlur('name')}
              value={values.name}
              placeholder="Nama Destinasi"
              leftIcon={
                <Ionicons name="location" size={24} color={GRAY_COLOR} />
              }
            />
            {errors.name && touched.name && <ErrorText message={errors.name} />}

            <TextInput
              label="Provinsi"
              onChangeText={handleChange('province')}
              onBlur={handleBlur('province')}
              value={values.province}
              placeholder="Provinsi"
              leftIcon={<Ionicons name="globe" size={24} color={GRAY_COLOR} />}
            />
            {errors.province && touched.province && (
              <ErrorText message={errors.province} />
            )}

            <TextInput
              label="Kota"
              onChangeText={handleChange('city')}
              onBlur={handleBlur('city')}
              value={values.city}
              placeholder="Kota"
              leftIcon={
                <Ionicons name="business" size={24} color={GRAY_COLOR} />
              }
            />
            {errors.city && touched.city && <ErrorText message={errors.city} />}

            <TextInput
              label="Deskripsi"
              onChangeText={handleChange('description')}
              onBlur={handleBlur('description')}
              value={values.description}
              multiline
              placeholder="Deskripsi"
              leftIcon={<Ionicons name="reader" size={24} color={GRAY_COLOR} />}
            />
            {errors.description && touched.description && (
              <ErrorText message={errors.description} />
            )}

            <Select
              label="Category"
              Icon={() => (
                <Ionicons name="aperture" size={24} color={GRAY_COLOR} />
              )}
              onValueChange={handleChange('categoryId')}
              value={values.categoryId}
              items={items}
            />
            {errors.categoryId && touched.categoryId && (
              <ErrorText message={errors.categoryId} />
            )}

            {images && (
              <HorizontalScroll>
                {images?.map((image) => {
                  return (
                    <Image
                      key={image.path}
                      source={{ uri: image.path }}
                      style={styles.preview}
                      PlaceholderContent={<ActivityIndicator />}
                    />
                  );
                })}
              </HorizontalScroll>
            )}

            <View style={styles.buttonContainer}>
              <UploadButton
                onPress={() => setIsVisible(true)}
                icon={
                  <Ionicons name="camera" size={20} color={PRIMARY_COLOR} />
                }
                title={!images ? 'Upload Gambar' : 'Ubah Gambar'}
              />

              <SimpleButton
                title="Tambah Destinasi"
                loading={isAddDestinationLoading}
                onPress={handleSubmit}
              />

              <BottomMenu menus={listMenu()} isVisible={isVisible} />
            </View>
          </View>
        </>
      )}
    </Formik>
  );
};

export default DestinationForm;

const styles = StyleSheet.create({
  wrapper: {
    marginVertical: 30,
  },
  text: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  preview: { width: win.width - 70, height: 230 },
  buttonContainer: {
    marginHorizontal: 15,
  },
});
