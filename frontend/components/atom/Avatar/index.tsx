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
  return (
    <ProfilePicture
      {...props}
      containerStyle={styles.container}
      source={{
        uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
      }}
    />
  );
};

export default Avatar;

const styles = StyleSheet.create({
  container: {
    borderRadius: 30,
    overflow: 'hidden',
    alignSelf: 'center',
  },
});
