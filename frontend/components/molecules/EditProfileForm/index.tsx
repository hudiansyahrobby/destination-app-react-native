import { Formik } from 'formik';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Avatar } from 'react-native-elements';
import ImagePicker, { ImageOrVideo } from 'react-native-image-crop-picker';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { GRAY_COLOR } from '../../../constants/color';
import useEditMyProfile from '../../../hooks/UserHooks/useEditMyProfile';
import useMyProfile from '../../../hooks/UserHooks/useMyProfile';
import profileValidationSchema from '../../../validations/profileValidation';
import BottomMenu from '../../atom/BottomMenu';
import { SimpleButton } from '../../atom/Button';
import { TextInput } from '../../atom/Form';
import ErrorText from '../../atom/Form/ErrorText';
import ImageLightBox from '../../atom/ImageLightBox';
import Loading from '../../atom/Loading';
import { Title } from '../../atom/Typography';

const EditProfileForm = () => {
  const [avatar, setAvatar] = useState<ImageOrVideo>();
  const [isVisible, setIsVisible] = React.useState(false);
  const [isImageOpen, setIsImageOpen] = React.useState(false);

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
        title: 'Lihat Gambar',
        onPress: () => setIsImageOpen(true),
        icon: 'folder-open',
      },
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

  const images = [
    {
      url: avatar
        ? avatar.path
        : user?.photoURL
        ? user?.photoURL
        : 'https://st.depositphotos.com/2101611/3925/v/600/depositphotos_39258143-stock-illustration-businessman-avatar-profile-picture.jpg',
    },
  ];

  return (
    <View style={styles.wrapper}>
      <View style={styles.image}>
        <ImageLightBox
          images={images}
          isVisible={isImageOpen}
          setIsVisible={setIsImageOpen}
        />

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

      <Formik
        initialValues={profile}
        enableReinitialize={true}
        onSubmit={async (values) => {
          const { about, country, displayName } = values;

          const data = new FormData();
          data.append('displayName', displayName);
          data.append('about', about);
          data.append('country', country);
          data.append('images', {
            uri: avatar?.path,
            name: `image-${Date.now()}.jpg`,
            type: avatar?.mime,
          });
          await mutateAsync(data);
        }}
        validationSchema={profileValidationSchema}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          touched,
          errors,
          isValid,
        }) => (
          <>
            <View style={styles.container}>
              <TextInput
                label="Nama"
                onChangeText={handleChange('displayName')}
                onBlur={handleBlur('displayName')}
                value={values.displayName}
                placeholder="Nama"
                leftIcon={
                  <Ionicons name="person" size={24} color={GRAY_COLOR} />
                }
              />

              {errors.displayName && touched.displayName && (
                <ErrorText message={errors.displayName} />
              )}

              <TextInput
                label="Negara"
                onChangeText={handleChange('country')}
                onBlur={handleBlur('country')}
                value={values.country}
                placeholder="Negara"
                leftIcon={
                  <Ionicons name="globe" size={24} color={GRAY_COLOR} />
                }
              />
              {errors.country && touched.country && (
                <ErrorText message={errors.country} />
              )}

              <TextInput
                label="Tentang Saya"
                multiline
                onChangeText={handleChange('about')}
                onBlur={handleBlur('about')}
                value={values.about}
                placeholder="Tentang Saya"
                leftIcon={<Ionicons name="book" size={24} color={GRAY_COLOR} />}
              />
              {errors.about && touched.about && (
                <ErrorText message={errors.about} />
              )}
            </View>

            <SimpleButton
              title="Edit Profile"
              loading={isMyEditProfileLoading}
              onPress={handleSubmit}
              disabled={!isValid}
            />
          </>
        )}
      </Formik>

      <BottomMenu menus={listMenu()} isVisible={isVisible} />
    </View>
  );
};

export default EditProfileForm;

const styles = StyleSheet.create({
  wrapper: {
    marginVertical: 30,
  },
  container: {
    marginBottom: 10,
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
