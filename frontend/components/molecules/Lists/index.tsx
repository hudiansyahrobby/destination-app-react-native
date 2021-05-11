import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Avatar, ListItem } from 'react-native-elements';
import useDeleteCategory from '../../../hooks/CategoryHooks/useDeleteCategory';
import useDeleteDestination from '../../../hooks/DestinationHooks/useDeleteDestination';
import { IDestination } from '../../../types/DestinationType';
import BottomMenu from '../../atom/BottomMenu';
import Loading from '../../atom/Loading';

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
      { title: 'Edit', onPress: () => onEdit(id), icon: 'pencil' },
      { title: 'Hapus', onPress: () => onDelete(id), icon: 'trash' },
      {
        title: 'Batal',
        onPress: () => setIsVisible(false),
        icon: 'close-sharp',
      },
    ];

    return menu;
  };

  if (isLoading) {
    return <Loading />;
  }
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
                headerTitle: destination.name,
              })
            }
            onLongPress={() => {
              setId(destination.id as string);
              setIsVisible(true);
            }}>
            <Avatar
              source={{
                uri:
                  (destination?.images[0] as any)?.imageUrl ||
                  'https://ami-sni.com/wp-content/themes/consultix/images/no-image-found-360x250.png',
              }}
              rounded
            />
            <ListItem.Content>
              <ListItem.Title>{destination.name}</ListItem.Title>
              <ListItem.Subtitle>
                {destination.city} - {destination.province}
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
