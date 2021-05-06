import React from 'react';
import { StyleSheet } from 'react-native';
import {
  SocialIcon,
  SocialIconProps,
} from 'react-native-elements/dist/social/SocialIcon';

const SocialButton: React.FC<SocialIconProps> = props => {
  return <SocialIcon {...props} style={styles.socialButton} />;
};

export default SocialButton;

const styles = StyleSheet.create({
  socialButton: {
    borderRadius: 10,
    width: '100%',
    alignSelf: 'center',
    marginTop: 0,
    marginBottom: 20,
  },
});
