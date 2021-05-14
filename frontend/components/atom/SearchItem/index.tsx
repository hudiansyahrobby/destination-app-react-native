import React from 'react';
import { StyleSheet } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { GRAY_COLOR } from '../../../constants/color';

interface SearchItemProps {
  placeholder: string;
  value: string;
  onChangeText: () => void;
  onSubmit: () => void;
}

const SearchItem: React.FC<SearchItemProps> = ({
  placeholder,
  value,
  onChangeText,
  onSubmit,
}) => {
  return (
    <>
      <SearchBar
        placeholder={placeholder}
        onChangeText={onChangeText}
        onSubmitEditing={onSubmit}
        value={value}
        containerStyle={styles.container}
        inputContainerStyle={styles.input}
        lightTheme={true}
      />
    </>
  );
};

export default SearchItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: GRAY_COLOR,
    borderColor: GRAY_COLOR,
    borderWidth: 0,
    borderRadius: 10,
    padding: 0,
  },
  input: {
    backgroundColor: GRAY_COLOR,
    borderRadius: 10,
    borderColor: GRAY_COLOR,
    borderWidth: 0,
  },
});
