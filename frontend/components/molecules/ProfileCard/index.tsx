import React from 'react';
import { StyleSheet } from 'react-native';
import { capitalizeEachWord } from '../../../helpers/capitalizeEachWord';
import Avatar from '../../atom/Avatar';
import ImageLightBox from '../../atom/ImageLightBox';
import { Subtitle, Title } from '../../atom/Typography';

interface ProfileCardProps {
  country?: string;
  name: string;
  email: string;
  image?: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  name,
  country,
  email,
  image,
}) => {
  const [isVisible, setIsVisible] = React.useState<boolean>(false);

  const images = [
    {
      // Simplest usage.
      url:
        image ||
        'https://st.depositphotos.com/2101611/3925/v/600/depositphotos_39258143-stock-illustration-businessman-avatar-profile-picture.jpg',
    },
  ];

  return (
    <>
      <ImageLightBox
        images={images}
        isVisible={isVisible}
        setIsVisible={setIsVisible}
      />

      <Avatar
        onPress={() => setIsVisible(true)}
        title={name[0].toUpperCase()}
        source={{
          uri:
            image ||
            'https://st.depositphotos.com/2101611/3925/v/600/depositphotos_39258143-stock-illustration-businessman-avatar-profile-picture.jpg',
        }}
        size="xlarge"
        rounded
      />
      <Title position="center" style={styles.title}>
        {capitalizeEachWord(name)}
      </Title>
      {country ? (
        <Subtitle position="center">{capitalizeEachWord(country)}</Subtitle>
      ) : (
        <Subtitle position="center">{email}</Subtitle>
      )}
    </>
  );
};

export default ProfileCard;

const styles = StyleSheet.create({
  title: { marginTop: 10 },
});
