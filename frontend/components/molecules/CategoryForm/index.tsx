import React from 'react';
import { StyleSheet, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { GRAY_COLOR } from '../../../constants/color';
import useAddCategory from '../../../hooks/CategoryHooks/useAddCategory';
import { SimpleButton } from '../../atom/Button';
import { TextInput } from '../../atom/Form';

const CategoryForm = () => {
  const [name, setName] = React.useState<string>('');

  const { mutateAsync, isLoading } = useAddCategory();

  const onSubmit = async () => {
    await mutateAsync({ name });
  };

  const onInputChange = (inputValue: string) => {
    setName(inputValue);
  };

  return (
    <View style={styles.wrapper}>
      <TextInput
        autoFocus
        label="Nama Kategori"
        placeholder="Nama Kategori"
        onChangeText={(value) => onInputChange(value)}
        leftIcon={<Ionicons name="aperture" size={24} color={GRAY_COLOR} />}
      />

      <SimpleButton
        title="Tambah Kategori"
        loading={isLoading}
        onPress={onSubmit}
      />
    </View>
  );
};

export default CategoryForm;

const styles = StyleSheet.create({
  wrapper: {
    marginVertical: 30,
  },
});