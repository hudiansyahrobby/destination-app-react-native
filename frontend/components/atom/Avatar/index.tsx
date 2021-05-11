import React from 'react';
import { StyleSheet } from 'react-native';
import {
  Avatar as ProfilePicture,
  AvatarProps as ProfilePictureProps,
} from 'react-native-elements';

type AvatarProps = ProfilePictureProps & {
  title: string;
};

const Avatar: React.FC<AvatarProps> = (props) => {
  return <ProfilePicture {...props} containerStyle={styles.container} />;
};

export default Avatar;

const styles = StyleSheet.create({
  container: {
    borderRadius: 30,
    overflow: 'hidden',
    alignSelf: 'center',
  },
});
