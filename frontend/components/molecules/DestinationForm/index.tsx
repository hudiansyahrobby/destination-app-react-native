import React from 'react';
import { GRAY_COLOR, PRIMARY_COLOR } from '../../../constants/color';
import { Select, TextInput } from '../../atom/Form';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { SimpleButton, UploadButton } from '../../atom/Button';
import { StyleSheet, View } from 'react-native';

const DestinationForm = () => {
  return (
    <View style={styles.wrapper}>
      <TextInput
        autoFocus
        label="Nama"
        placeholder="Name"
        leftIcon={<Ionicons name="location" size={24} color={GRAY_COLOR} />}
      />

      <Select
        label="Provinsi"
        onValueChange={() => {}}
        items={[]}
        Icon={() => <Ionicons name="globe" size={24} color={GRAY_COLOR} />}
      />

      <Select
        label="Kota"
        onValueChange={() => {}}
        items={[]}
        Icon={() => <Ionicons name="business" size={24} color={GRAY_COLOR} />}
      />

      <TextInput
        label="Deskripsi"
        placeholder="Deskripsi"
        multiline
        leftIcon={<Ionicons name="reader" size={24} color={GRAY_COLOR} />}
      />

      <UploadButton
        onPress={() => {}}
        icon={<Ionicons name="camera" size={90} color={PRIMARY_COLOR} />}
      />

      <SimpleButton title="Tambah Destinasi" />
    </View>
  );
};

export default DestinationForm;

const styles = StyleSheet.create({
  wrapper: {
    marginVertical: 30,
  },
});
