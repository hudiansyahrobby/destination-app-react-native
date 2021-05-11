import {
  useNavigation,
  useRoute,
  useScrollToTop,
} from '@react-navigation/native';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import useDestination from '../../../hooks/DestinationHooks/useDestination';
import { IDestination } from '../../../types/DestinationType';
import Loading from '../../atom/Loading';
import { Title } from '../../atom/Typography';
import CommentDetail from '../../organisms/CommentDetail';
import DestinationDetail from '../../organisms/DestinationDetail';

const Detail = () => {
  const ref = React.useRef(null);
  useScrollToTop(ref);

  const navigation = useNavigation();
  const { params } = useRoute();
  const destinationId = (params as any)?.itemId;
  const destinationName = (params as any)?.headerTitle;

  const { isLoading, data, isError } = useDestination(destinationId);

  navigation.setOptions({
    headerTitle: destinationName,
  });

  const destination: IDestination = data;

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return (
      <View style={styles.text}>
        <Title size="sm">Error</Title>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.scrollView} ref={ref}>
      <View style={styles.container}>
        <DestinationDetail destination={destination} />
        <CommentDetail />
      </View>
    </ScrollView>
  );
};

export default Detail;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingHorizontal: 30,
    paddingTop: 60,
    minHeight: '100%',
  },
  scrollView: { flexGrow: 1 },
  text: {
    marginHorizontal: 20,
    marginTop: 20,
  },
});
