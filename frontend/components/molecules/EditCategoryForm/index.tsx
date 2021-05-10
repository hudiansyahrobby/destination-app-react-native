import React from 'react';
import { StyleSheet, View } from 'react-native';
import * as ImagePicker from 'react-native-image-picker';
import {
  ImageLibraryOptions,
  ImagePickerResponse,
} from 'react-native-image-picker';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { GRAY_COLOR, PRIMARY_COLOR } from '../../../constants/color';
import useDestination from '../../../hooks/DestinationHooks/useDestination';
import useEditDestination from '../../../hooks/DestinationHooks/useEditDestination';
import { SimpleButton, UploadButton } from '../../atom/Button';
import { TextInput } from '../../atom/Form';
import { Title } from '../../atom/Typography';

const EditCategoryForm = () => {
  const [image, setImage] = React.useState<ImagePickerResponse>({});
  const [destination, setDestination] = React.useState({
    name: '',
    province: '',
    city: '',
    description: '',
    categoryId: '',
  });

  const {
    mutateAsync,
    isLoading: isEditDestinationLoading,
    isError: isEditDestinationError,
  } = useEditDestination();
  const {
    data,
    isLoading: isDestinationLoading,
    isError: isDestinationError,
  } = useDestination('5');

  React.useEffect(() => {
    setDestination({
      name: destination.name,
      province: destination.province,
      city: destination.city,
      description: destination.description,
      categoryId: destination.categoryId,
    });
  }, []);

  const onSubmit = async () => {
    const { name, province, city, description, categoryId } = destination;

    const data = new FormData();
    data.append('name', name);
    data.append('province', province);
    data.append('city', city);
    data.append('description', description);
    data.append('categoryId', categoryId);
    data.append('images', {
      uri: image.uri,
      name: image.fileName,
      type: image.type,
    });
    await mutateAsync({ ...data, id: 'asdiuhadiahwi' });
  };

  const onInputChange = (inputName: string, inputValue: string) => {
    setDestination({ ...destination, [inputName]: inputValue });
  };

  const launchImageLibrary = () => {
    let options: ImageLibraryOptions = {
      mediaType: 'photo',
    };

    ImagePicker.launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorCode === 'camera_unavailable') {
        console.log('Camera not available');
      } else if (response.errorCode === 'permission') {
        console.log('Permission denied');
      } else {
        const source = response;
        setImage(source);
      }
    });
  };

  if (isDestinationLoading) {
    return (
      <View style={styles.text}>
        <Title size="sm">Loading...</Title>
      </View>
    );
  }

  if (isDestinationError) {
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
        label="Nama Destinasi"
        placeholder="Nama Destinasi"
        defaultValue={data.name}
        onChangeText={(value) => onInputChange('name', value)}
        leftIcon={<Ionicons name="location" size={24} color={GRAY_COLOR} />}
      />

      <TextInput
        autoFocus
        label="Provinsi"
        placeholder="Provinsi"
        defaultValue={data.province}
        onChangeText={(value) => onInputChange('province', value)}
        leftIcon={<Ionicons name="globe" size={24} color={GRAY_COLOR} />}
      />

      <TextInput
        autoFocus
        label="Kota"
        placeholder="Kota"
        defaultValue={data.city}
        onChangeText={(value) => onInputChange('city', value)}
        leftIcon={<Ionicons name="business" size={24} color={GRAY_COLOR} />}
      />

      <TextInput
        label="Deskripsi"
        placeholder="Deskripsi"
        defaultValue={data.description}
        multiline
        leftIcon={<Ionicons name="reader" size={24} color={GRAY_COLOR} />}
      />

      <UploadButton
        onPress={launchImageLibrary}
        icon={<Ionicons name="camera" size={90} color={PRIMARY_COLOR} />}
      />

      <SimpleButton
        title="Edit Destinasi"
        loading={isEditDestinationLoading}
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
