import React from 'react';
import { StyleSheet, View } from 'react-native';
import * as ImagePicker from 'react-native-image-picker';
import {
  ImageLibraryOptions,
  ImagePickerResponse,
} from 'react-native-image-picker';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { GRAY_COLOR, PRIMARY_COLOR } from '../../../constants/color';
import useAddDestination from '../../../hooks/DestinationHooks/useAddDestination';
import { SimpleButton, UploadButton } from '../../atom/Button';
import { TextInput } from '../../atom/Form';

const DestinationForm = () => {
  const [image, setImage] = React.useState<ImagePickerResponse>({});
  const [destination, setDestination] = React.useState({
    name: '',
    province: '',
    city: '',
    description: '',
    categoryId: '',
  });

  console.log('IMAGE', image);
  const { mutateAsync, isLoading } = useAddDestination();

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
    await mutateAsync(data);
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
        autoFocus
        label="Provinsi"
        placeholder="Provinsi"
        onChangeText={(value) => onInputChange('province', value)}
        leftIcon={<Ionicons name="globe" size={24} color={GRAY_COLOR} />}
      />

      <TextInput
        autoFocus
        label="Kota"
        placeholder="Kota"
        onChangeText={(value) => onInputChange('city', value)}
        leftIcon={<Ionicons name="business" size={24} color={GRAY_COLOR} />}
      />

      <TextInput
        label="Deskripsi"
        placeholder="Deskripsi"
        multiline
        leftIcon={<Ionicons name="reader" size={24} color={GRAY_COLOR} />}
      />

      <UploadButton
        onPress={launchImageLibrary}
        icon={<Ionicons name="camera" size={90} color={PRIMARY_COLOR} />}
      />

      <SimpleButton
        title="Tambah Destinasi"
        loading={isLoading}
        onPress={onSubmit}
      />
    </View>
  );
};

export default DestinationForm;

const styles = StyleSheet.create({
  wrapper: {
    marginVertical: 30,
  },
});
