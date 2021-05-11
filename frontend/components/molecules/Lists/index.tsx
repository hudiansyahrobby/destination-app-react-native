import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Avatar, ListItem } from 'react-native-elements';
import useDeleteCategory from '../../../hooks/CategoryHooks/useDeleteCategory';
import useDeleteDestination from '../../../hooks/DestinationHooks/useDeleteDestination';
import { IDestination } from '../../../types/DestinationType';
import BottomMenu from '../../atom/BottomMenu';

interface ListsProps {
  destinations: IDestination[];
}

const Lists: React.FC<ListsProps> = ({ destinations }) => {
  const navigation = useNavigation();

  const [id, setId] = React.useState('');
  const [isVisible, setIsVisible] = React.useState(false);
  const { isLoading, isError, mutateAsync } = useDeleteDestination();

  const onEdit = (destinationId: string) => {
    setIsVisible(false);
    navigation.navigate('EditDestination', {
      itemList: destinationId,
    });
  };

  const onDelete = async (destinationId: string) => {
    setIsVisible(false);
    await mutateAsync(destinationId);
  };

  const listMenu = () => {
    const menu = [
      { title: 'Edit', onPress: () => onEdit(id) },
      { title: 'Hapus', onPress: () => onDelete(id) },
      {
        title: 'Batal',
        onPress: () => setIsVisible(false),
      },
    ];

    return menu;
  };

  return (
    <View style={styles.container}>
      {destinations?.map((destination) => (
        <React.Fragment key={destination.id}>
          <ListItem
            key={destination.id}
            bottomDivider
            topDivider
            onPress={() =>
              navigation.navigate('Detail', {
                itemId: destination.id,
              })
            }
            onLongPress={() => {
              setId(destination.id as string);
              setIsVisible(true);
            }}>
            <Avatar
              source={{
                uri:
                  'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
              }}
              rounded
            />
            <ListItem.Content>
              <ListItem.Title>{destination.name}</ListItem.Title>
              <ListItem.Subtitle>
                {destination.province} - {destination.city}
              </ListItem.Subtitle>
            </ListItem.Content>
            <ListItem.Chevron />
          </ListItem>
          <BottomMenu menus={listMenu()} isVisible={isVisible} />
        </React.Fragment>
      ))}
    </View>
  );
};

export default Lists;

const styles = StyleSheet.create({
  container: { marginVertical: 20 },
});
