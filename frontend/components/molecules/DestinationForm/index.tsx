import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { Image } from 'react-native-elements';
import ImagePicker, { ImageOrVideo } from 'react-native-image-crop-picker';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { GRAY_COLOR, PRIMARY_COLOR } from '../../../constants/color';
import useCategories from '../../../hooks/CategoryHooks/useCategories';
import useAddDestination from '../../../hooks/DestinationHooks/useAddDestination';
import { ICategory } from '../../../types/CategoryType';
import BottomMenu from '../../atom/BottomMenu';
import { SimpleButton, UploadButton } from '../../atom/Button';
import { Select, TextInput } from '../../atom/Form';
import HorizontalScroll from '../../atom/HorizontalScroll';
import Loading from '../../atom/Loading';
import { Dimensions } from 'react-native';

const win = Dimensions.get('window');

const DestinationForm = () => {
  const [images, setImages] = React.useState<ImageOrVideo[]>();
  const [isVisible, setIsVisible] = React.useState(false);
  const [destination, setDestination] = React.useState({
    name: '',
    province: '',
    city: '',
    description: '',
    categoryId: '',
  });

  console.log('IMAGESKU', images);
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
      },
      { title: 'Ambil Gambar', onPress: () => launchImageCamera() },
      {
        title: 'Batal',
        onPress: () => setIsVisible(false),
      },
    ];

    return menu;
  };

  const onSubmit = async () => {
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

  const onInputChange = (inputName: string, inputValue: string) => {
    setDestination({ ...destination, [inputName]: inputValue });
  };

  if (isCategoriesLoading) {
    return <Loading />;
  }

  const items = categories.map((category: ICategory) => {
    return {
      label: category.name,
      value: category.id,
      color: 'white',
    };
  });

  return (
    <View style={styles.wrapper}>
      <TextInput
        autoFocus
        label="Nama Destinasi"
        placeholder="Nama Destinasi"
        onChangeText={(value) => onInputChange('name', value)}
        leftIcon={<Ionicons name="location" size={24} color={GRAY_COLOR} />}
      />

      <TextInput
        label="Provinsi"
        placeholder="Provinsi"
        onChangeText={(value) => onInputChange('province', value)}
        leftIcon={<Ionicons name="globe" size={24} color={GRAY_COLOR} />}
      />

      <TextInput
        label="Kota"
        placeholder="Kota"
        onChangeText={(value) => onInputChange('city', value)}
        leftIcon={<Ionicons name="business" size={24} color={GRAY_COLOR} />}
      />

      <TextInput
        label="Deskripsi"
        placeholder="Deskripsi"
        onChangeText={(value) => onInputChange('description', value)}
        multiline
        leftIcon={<Ionicons name="reader" size={24} color={GRAY_COLOR} />}
      />

      <Select
        label="Category"
        Icon={() => <Ionicons name="aperture" size={24} color={GRAY_COLOR} />}
        onValueChange={(value) => onInputChange('categoryId', value)}
        value={destination.categoryId}
        items={items}
      />

      {images && (
        <HorizontalScroll>
          {images.map((image) => {
            return (
              <Image
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
          icon={<Ionicons name="camera" size={20} color={PRIMARY_COLOR} />}
          title={!images ? 'Upload Gambar' : 'Ubah Gambar'}
        />

        <SimpleButton
          title="Tambah Destinasi"
          loading={isAddDestinationLoading}
          onPress={onSubmit}
        />
      </View>

      <BottomMenu menus={listMenu()} isVisible={isVisible} />
    </View>
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
