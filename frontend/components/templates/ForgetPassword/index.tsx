import { useScrollToTop } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { ForgetPassword as ForgetPasswordForm } from '../../organisms/';

const ForgetPassword = () => {
  const ref = React.useRef(null);

  useScrollToTop(ref);

  return (
    <ScrollView contentContainerStyle={styles.scrollView} ref={ref}>
      <View style={styles.container}>
        <ForgetPasswordForm />
      </View>
    </ScrollView>
  );
};

export default ForgetPassword;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingHorizontal: 30,
    paddingTop: 30,
    minHeight: '100%',
  },
  scrollView: { flexGrow: 1 },
});
