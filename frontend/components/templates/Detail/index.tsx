import {
  useNavigation,
  useRoute,
  useScrollToTop,
} from '@react-navigation/native';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import useComments from '../../../hooks/CommentHooks/useComments';
import useDestination from '../../../hooks/DestinationHooks/useDestination';
import { IComment } from '../../../types/CommentType';
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
  console.log(params);
  console.log(destinationName);

  const {
    isLoading: isDestinationLoading,
    data: destination,
    isError: isDestinationError,
  } = useDestination(destinationId);
  const {
    isLoading: isCommentLoading,
    data: comments,
    isError: isCommentError,
  } = useComments(destinationId);

  if (isDestinationLoading || isCommentLoading) {
    return <Loading />;
  }

  if (isDestinationError || isCommentError) {
    return (
      <View style={styles.text}>
        <Title size="sm">Error</Title>
      </View>
    );
  }

  navigation.setOptions({
    headerTitle: destinationName,
  });
  return (
    <ScrollView contentContainerStyle={styles.scrollView} ref={ref}>
      <View style={styles.container}>
        <DestinationDetail destination={destination} />
        <CommentDetail
          destinationId={destinationId}
          comments={comments as Required<IComment>[]}
        />
      </View>
    </ScrollView>
  );
};

export default Detail;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingHorizontal: 30,
    paddingTop: 40,
    minHeight: '100%',
  },
  scrollView: { flexGrow: 1 },
  text: {
    marginHorizontal: 20,
    marginTop: 20,
  },
});
