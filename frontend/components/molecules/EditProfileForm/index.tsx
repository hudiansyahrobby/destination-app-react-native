import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Avatar } from 'react-native-elements';
import * as ImagePicker from 'react-native-image-picker';
import {
  ImageLibraryOptions,
  ImagePickerResponse,
} from 'react-native-image-picker';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { GRAY_COLOR } from '../../../constants/color';
import useEditMyProfile from '../../../hooks/UserHooks/useEditMyProfile';
import useMyProfile from '../../../hooks/UserHooks/useMyProfile';
import { SimpleButton } from '../../atom/Button';
import { TextInput } from '../../atom/Form';
import Loading from '../../atom/Loading';
import { Title } from '../../atom/Typography';

const EditProfileForm = () => {
  const [image, setImage] = useState<ImagePickerResponse>({});
  const [profile, setProfile] = useState({
    displayName: '',
    country: '',
    about: '',
  });

  const {
    data: myProfileData,
    isError: isMyProfileError,
    isLoading: isMyProfileLoading,
  } = useMyProfile();
  const user = myProfileData;

  const { mutateAsync, isLoading: isMyEditProfileLoading } = useEditMyProfile();

  React.useEffect(() => {
    setProfile({
      displayName: user.displayName,
      country: user.country,
      about: user.about,
    });
  }, []);

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

  const onInputChange = (inputName: string, inputValue: string) => {
    setProfile({ ...profile, [inputName]: inputValue });
  };

  const onSubmit = () => {
    const { about, country, displayName } = profile;

    const data = new FormData();
    data.append('displayName', displayName);
    data.append('about', about);
    data.append('country', country);
    data.append('images', {
      uri: image.uri,
      name: image.fileName,
      type: image.type,
    });
    mutateAsync(data);
  };

  if (isMyProfileLoading) {
    return <Loading />;
  }

  if (isMyProfileError) {
    return (
      <View style={styles.text}>
        <Title size="sm">Loading..</Title>
      </View>
    );
  }

  return (
    <View style={styles.wrapper}>
      <View style={styles.image}>
        <Avatar
          size="xlarge"
          title={user.displayName[0].toUpperCase()}
          rounded
          avatarStyle={styles.avatar}
          placeholderStyle={styles.imagePlaceholder}
          source={{
            uri:
              'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
          }}
          onPress={() => launchImageLibrary()}>
          <Avatar.Accessory
            name="camera"
            type="ionicon"
            style={styles.icon}
            size={40}
            onPress={() => launchImageLibrary()}
          />
        </Avatar>
      </View>

      <TextInput
        autoFocus
        label="Nama"
        placeholder="Nama"
        defaultValue={user.displayName}
        onChangeText={(value) => onInputChange('displayName', value)}
        leftIcon={<Ionicons name="person" size={24} color={GRAY_COLOR} />}
      />

      <TextInput
        label="Negara"
        placeholder="Negara"
        defaultValue={user.country}
        onChangeText={(value) => onInputChange('country', value)}
        leftIcon={<Ionicons name="globe" size={24} color={GRAY_COLOR} />}
      />

      <TextInput
        label="Tentang Saya"
        placeholder="Tentang Saya"
        onChangeText={(value) => onInputChange('about', value)}
        multiline
        defaultValue={user.about}
        leftIcon={<Ionicons name="reader" size={24} color={GRAY_COLOR} />}
      />

      <SimpleButton
        title="Edit Profile"
        loading={isMyEditProfileLoading}
        onPress={onSubmit}
      />
    </View>
  );
};

export default EditProfileForm;

const styles = StyleSheet.create({
  wrapper: {
    marginVertical: 30,
  },
  image: {
    alignItems: 'center',
    marginBottom: 30,
  },
  imagePlaceholder: { backgroundColor: '#6366F1' },
  text: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  avatar: {
    borderWidth: 7,
    borderColor: '#D1D5DB',
    borderRadius: 100,
  },
  icon: { backgroundColor: '#9CA3AF' },
});
