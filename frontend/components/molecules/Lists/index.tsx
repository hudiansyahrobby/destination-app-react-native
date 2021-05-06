import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Avatar, ListItem } from 'react-native-elements';
import TouchableScale from 'react-native-touchable-scale';
import { PRIMARY_COLOR } from '../../../constants/color';

interface ListsProps {
  title: string;
}

const Lists: React.FC<ListsProps> = ({ title }) => {
  const list = [
    {
      name: 'Amy Farha',
      avatar_url:
        'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
      subtitle: 'Vice President',
    },
    {
      name: 'Chris Jackson',
      avatar_url:
        'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
      subtitle: 'Vice Chairman',
    },
  ];
  return (
    <View style={{ marginVertical: 20 }}>
      {list.map((l, i) => (
        <ListItem key={i} bottomDivider topDivider>
          <Avatar source={{ uri: l.avatar_url }} rounded />
          <ListItem.Content>
            <ListItem.Title>{l.name}</ListItem.Title>
            <ListItem.Subtitle>{l.subtitle}</ListItem.Subtitle>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
      ))}
    </View>
  );
};

export default Lists;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 15,
    marginVertical: 15,
  },
  title: {
    fontWeight: '700',
    color: PRIMARY_COLOR,
  },
});
