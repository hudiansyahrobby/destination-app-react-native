import React from 'react';
import { GRAY_COLOR, PRIMARY_COLOR } from '../../../constants/color';
import { TextInput } from '../../atom/Form';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { SimpleButton, UploadButton } from '../../atom/Button';
import { StyleSheet, View } from 'react-native';

const EditProfileForm = () => {
  return (
    <View style={styles.wrapper}>
      <TextInput
        autoFocus
        label="Nama"
        placeholder="Name"
        leftIcon={<Ionicons name="person" size={24} color={GRAY_COLOR} />}
      />

      <TextInput
        label="Country"
        placeholder="Country"
        leftIcon={<Ionicons name="globe" size={24} color={GRAY_COLOR} />}
      />

      <TextInput
        label="City"
        placeholder="City"
        leftIcon={<Ionicons name="business" size={24} color={GRAY_COLOR} />}
      />

      <TextInput
        label="About Me"
        placeholder="About Me"
        multiline
        leftIcon={<Ionicons name="reader" size={24} color={GRAY_COLOR} />}
      />

      <UploadButton
        onPress={() => {}}
        icon={<Ionicons name="camera" size={90} color={PRIMARY_COLOR} />}
      />

      <SimpleButton title="Edit Profile" />
    </View>
  );
};

export default EditProfileForm;

const styles = StyleSheet.create({
  wrapper: {
    marginVertical: 30,
  },
});
