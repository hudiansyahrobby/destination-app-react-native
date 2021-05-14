import React from 'react';
import { Input, InputProps } from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { GRAY_COLOR } from '../../../../constants/color';

const PasswordInput: React.FC<InputProps> = (props) => {
  const [show, setShow] = React.useState<boolean>(false);

  return (
    <Input
      secureTextEntry={!show}
      leftIcon={<Ionicons name="lock-closed" size={24} color={GRAY_COLOR} />}
      rightIcon={
        <Ionicons
          name={show ? 'eye' : 'eye-off'}
          size={24}
          color={GRAY_COLOR}
          onPress={() => setShow(!show)}
        />
      }
      {...props}
    />
  );
};

export default PasswordInput;
