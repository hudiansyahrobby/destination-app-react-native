import React from 'react';
import { SearchBar } from 'react-native-elements';
import { StyleSheet } from 'react-native';
import { GRAY_COLOR } from '../../../constants/color';

interface SearchItemProps {}

const SearchItem: React.FC<SearchItemProps> = ({}) => {
  return (
    <SearchBar
      placeholder="Type Here..."
      onChangeText={() => {}}
      value=""
      containerStyle={styles.container}
      inputContainerStyle={styles.input}
      lightTheme={true}
    />
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
