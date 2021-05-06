import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { PRIMARY_COLOR } from '../../../constants/color';

interface WelcomeCardProps {
  name: string;
}

const WelcomeCard: React.FC<WelcomeCardProps> = ({ name }) => {
  return (
    <View style={styles.container}>
      <View style={styles.icon}>
        <Ionicons
          name="ios-bar-chart-outline"
          size={40}
          color={PRIMARY_COLOR}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.welcome}>Selamat Datang</Text>
        <Text style={styles.name}>{name}</Text>
      </View>
    </View>
  );
};

export default WelcomeCard;

const styles = StyleSheet.create({
  container: {
    borderColor: '#E5E7EB',
    backgroundColor: PRIMARY_COLOR,
    borderWidth: 1,
    padding: 20,
    borderRadius: 20,
    margin: 10,
  },
  icon: {
    backgroundColor: '#F3F4F6',
    alignSelf: 'flex-start',
    padding: 10,
    borderRadius: 15,
  },
  textContainer: {
    marginTop: 20,
  },
  welcome: {
    color: 'white',
    fontSize: 29,
    lineHeight: 40,
    fontWeight: '700',
  },
  name: {
    color: 'white',
    fontSize: 20,
    lineHeight: 40,
    fontWeight: '600',
  },
});
