import React from 'react';
import { StyleSheet, View } from 'react-native';
import DividerLine from '../../atom/Divider/DividerLine';
import HorizontalScroll from '../../atom/HorizontalScroll';
import { Subtitle, Title } from '../../atom/Typography';
import { DestinationCard, ProfileCard } from '../../molecules';

const Profile = () => {
  return (
    <View style={styles.container}>
      <ProfileCard />
      <DividerLine />
      <View style={styles.about}>
        <Title size="md">About Me</Title>
        <Subtitle size="sm" position="justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
          tempora quae, reiciendis rem possimus libero numquam exercitationem
          autem amet maiores, sunt distinctio ducimus quia iste? Labore fugit ab
          eius praesentium laborum ipsam voluptatem accusamus deleniti
          consectetur dolorem iusto numquam assumenda officia amet, eveniet
          nemo. Vel, assumenda quia? Ex, repellat ipsa.
        </Subtitle>
      </View>
      <HorizontalScroll>
        <DestinationCard />
        <DestinationCard />
        <DestinationCard />
      </HorizontalScroll>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    marginTop: 60,
    marginBottom: 40,
  },
  about: {
    marginHorizontal: 25,
    marginTop: 25,
  },
});
