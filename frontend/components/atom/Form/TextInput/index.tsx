import React from 'react';
import { Input, InputProps } from 'react-native-elements';

const TextInput: React.FC<InputProps> = (props) => {
  const { leftIcon, rightIcon, ...rest } = props;
  const leftIconOpt = leftIcon && leftIcon;
  const rightIconOpt = rightIcon && rightIcon;
  return <Input leftIcon={leftIconOpt} rightIcon={rightIconOpt} {...rest} />;
};

export default TextInput;
