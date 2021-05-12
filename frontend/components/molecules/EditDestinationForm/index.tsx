import { useRoute } from '@react-navigation/core';
import { Formik } from 'formik';
import React from 'react';
import { ActivityIndicator, Dimensions, StyleSheet, View } from 'react-native';
import { Image } from 'react-native-elements';
import ImagePicker from 'react-native-image-crop-picker';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { GRAY_COLOR, PRIMARY_COLOR } from '../../../constants/color';
import { capitalizeEachWord } from '../../../helpers/capitalizeEachWord';
import useCategories from '../../../hooks/CategoryHooks/useCategories';
import useDestination from '../../../hooks/DestinationHooks/useDestination';
import useEditDestination from '../../../hooks/DestinationHooks/useEditDestination';
import { ICategory } from '../../../types/CategoryType';
import { IDestination } from '../../../types/DestinationType';
import destinationValidationSchema from '../../../validations/categoryValidation';
import BottomMenu from '../../atom/BottomMenu';
import { SimpleButton, UploadButton } from '../../atom/Button';
import { Select, TextInput } from '../../atom/Form';
import ErrorText from '../../atom/Form/ErrorText';
import HorizontalScroll from '../../atom/HorizontalScroll';
import Loading from '../../atom/Loading';
import { Title } from '../../atom/Typography';

const win = Dimensions.get('window');

const EditDestinationForm = () => {
  const [images, setImages] = React.useState<any[]>();
  const [isVisible, setIsVisible] = React.useState(false);
  const [destination, setDestination] = React.useState({
    name: '',
    province: '',
    city: '',
    description: '',
    categoryId: '',
  });

  const { params } = useRoute();
  const destinationId = (params as any).itemList;

  console.log('ID PRAMAS', destinationId);
  const {
    mutateAsync,
    isLoading: isEditDestinationLoading,
    isError: isEditDestinationError,
  } = useEditDestination(destinationId);

  const {
    data: destinationData,
    isLoading: isDestinationLoading,
    isError: isDestinationError,
  } = useDestination(destinationId);

  const {
    data: categories,
    isLoading: isCategoriesLoading,
    isError: isCategoriesError,
  } = useCategories();

  const items = categories.map((category: ICategory) => {
    return {
      label: capitalizeEachWord(category.name),
      value: category.id,
      color: 'white',
    };
  });

  React.useEffect(() => {
    setDestination({
      name: destinationData?.name,
      province: destinationData?.province,
      city: destinationData?.city,
      description: destinationData?.description,
      categoryId: destinationData?.categoryId,
    });
    setImages(destinationData?.images);
  }, [
    destinationData?.categoryId,
    destinationData?.city,
    destinationData?.description,
    destinationData?.name,
    destinationData?.province,
    destinationData?.images,
  ]);

  const onSubmit = async (_destination: Partial<IDestination>) => {
    const { name, province, city, description, categoryId } = _destination;

    const data = new FormData();
    data.append('name', name);
    data.append('province', province);
    data.append('city', city);
    data.append('description', description);
    data.append('categoryId', categoryId);
    images?.map((image) => {
      if (image?.path) {
        data.append('images', {
          uri: image?.path,
          name: `destination-${Date.now()}-${image.size}-${image.height}.jpg`,
          type: image?.mime,
        });
      }
    });

    await mutateAsync({ destination: data, id: destinationId });
  };

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

  const launchImageCamera = () => {
    ImagePicker.openCamera({
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
        title: 'Ambil Gambar',
        onPress: () => launchImageCamera(),
        icon: 'ios-camera',
      },
      {
        title: 'Batal',
        onPress: () => setIsVisible(false),
        icon: 'close-sharp',
      },
    ];

    return menu;
  };

  if (isDestinationLoading || isCategoriesLoading) {
    return <Loading />;
  }

  if (isDestinationError || isCategoriesError) {
    return (
      <View style={styles.text}>
        <Title size="sm">Error..</Title>
      </View>
    );
  }

  return (
    <Formik
      initialValues={destination}
      enableReinitialize
      onSubmit={async (values) => {
        console.log(values);
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
                {images.map((image) => {
                  return (
                    <Image
                      key={image.path}
                      source={{ uri: image.path || image.imageUrl }}
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
                title="Edit Destinasi"
                loading={isEditDestinationLoading}
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

export default EditDestinationForm;

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
