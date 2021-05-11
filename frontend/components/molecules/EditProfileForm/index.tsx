import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Avatar } from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { GRAY_COLOR } from '../../../constants/color';
import useEditMyProfile from '../../../hooks/UserHooks/useEditMyProfile';
import useMyProfile from '../../../hooks/UserHooks/useMyProfile';
import { SimpleButton } from '../../atom/Button';
import { TextInput } from '../../atom/Form';
import Loading from '../../atom/Loading';
import { Title } from '../../atom/Typography';
import ImagePicker, { ImageOrVideo } from 'react-native-image-crop-picker';
import BottomMenu from '../../atom/BottomMenu';

const EditProfileForm = () => {
  const [avatar, setAvatar] = useState<ImageOrVideo>();
  const [isVisible, setIsVisible] = React.useState(false);

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
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then((image) => {
      setAvatar(image);
      setIsVisible(false);
    });
  };

  const launchImageCamera = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then((image) => {
      setAvatar(image);
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
      uri: avatar?.path,
      name: `image-${Date.now()}.jpg`,
      type: avatar?.mime,
    });
    console.log('DATA', data);
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
          rounded
          source={{
            uri: avatar
              ? avatar.path
              : user?.photoURL
              ? user?.photoURL
              : 'https://st.depositphotos.com/2101611/3925/v/600/depositphotos_39258143-stock-illustration-businessman-avatar-profile-picture.jpg',
          }}
          onPress={() => setIsVisible(true)}>
          <Avatar.Accessory
            name="camera"
            type="ionicon"
            style={styles.icon}
            size={40}
            onPress={() => setIsVisible(true)}
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

      <BottomMenu menus={listMenu()} isVisible={isVisible} />
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
