import React from 'react';
import { StyleSheet, Text } from 'react-native';
import RNPickerSelect, { PickerSelectProps } from 'react-native-picker-select';

type SelectProps = PickerSelectProps & {
  label: string;
};

const Select: React.FC<SelectProps> = props => {
  const { label, ...rest } = props;
  return (
    <>
      <Text style={styles.label}>{label}</Text>
      <RNPickerSelect
        placeholder={{
          label: label,
          value: null,
        }}
        style={{
          iconContainer: {
            left: 0,
            right: '96%',
            top: 15,
          },
          viewContainer: {
            borderBottomWidth: 1,
            paddingLeft: 17,
            borderBottomColor: '#86939e',
            marginHorizontal: 10,
            marginBottom: 20,
          },
          placeholder: {
            color: '#86939e',
          },
        }}
        {...rest}
        //   onValueChange={value => console.log(value)}
        //   items={[
        //     { label: 'Football', value: 'football' },
        //     { label: 'Baseball', value: 'baseball' },
        //     { label: 'Hockey', value: 'hockey' },
        //   ]}
      />
    </>
  );
};

export default Select;

const styles = StyleSheet.create({
  label: { color: '#86939e', fontWeight: 'bold', fontSize: 16, marginLeft: 10 },
});
