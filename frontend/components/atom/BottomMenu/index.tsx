import React from 'react';
import { StyleSheet } from 'react-native';
import { BottomSheet, ListItem } from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface Menu {
  title: string;
  onPress: () => void;
  icon: string;
}

interface BottomMenuProps {
  menus: Menu[];
  isVisible: boolean;
}

const BottomMenu: React.FC<BottomMenuProps> = ({ menus, isVisible }) => {
  return (
    <BottomSheet
      modalProps={{ animationType: 'slide' }}
      isVisible={isVisible}
      containerStyle={styles.container}>
      {menus.map((menu, index) => (
        <ListItem key={index} onPress={menu.onPress}>
          <ListItem.Content style={styles.content}>
            <Ionicons name={menu.icon} size={25} style={styles.icon} />
            <ListItem.Title>{menu.title}</ListItem.Title>
          </ListItem.Content>
        </ListItem>
      ))}
    </BottomSheet>
  );
};

export default BottomMenu;

const styles = StyleSheet.create({
  container: { backgroundColor: 'rgba(0.5, 0.25, 0, 0.2)' },
  content: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  icon: { marginRight: 15 },
});
