import { Formik } from 'formik';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { BottomSheet } from 'react-native-elements';
import { showMessage } from 'react-native-flash-message';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { SECONDARY_COLOR } from '../../../constants/color';
import { capitalizeEachWord } from '../../../helpers/capitalizeEachWord';
import useEditComment from '../../../hooks/CommentHooks/useEditComment';
import { IComment } from '../../../types/CommentType';
import commentValidationSchema from '../../../validations/commentValidation';
import { SimpleButton } from '../../atom/Button';
import { TextInput } from '../../atom/Form';
import ErrorText from '../../atom/Form/ErrorText';
import Loading from '../../atom/Loading';
import Rating from '../../atom/Rating';
import { Title } from '../../atom/Typography';

interface EditCommentProps {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  comment: Required<IComment>;
}

const EditComment: React.FC<EditCommentProps> = ({
  show,
  setShow,
  comment,
}) => {
  const [rating, setRating] = React.useState<number>(comment.rating);

  const { isLoading, error, mutateAsync } = useEditComment();

  const onRatingComplete = (score: number) => {
    setRating(score);
  };

  const addCommentError: any = error;
  const appError = addCommentError?.response?.data?.message;

  return (
    <BottomSheet
      isVisible={show}
      modalProps={{ animationType: 'slide' }}
      containerStyle={styles.bottomSheetContainer}>
      <View style={styles.inputContainer}>
        {isLoading ? (
          <Loading />
        ) : (
          <>
            <View style={styles.title}>
              <Title size="sm">Komentar</Title>
              <Ionicons
                name="close"
                size={25}
                color={SECONDARY_COLOR}
                onPress={() => setShow(false)}
              />
            </View>
            <Formik
              initialValues={{
                content: comment.content,
                rating: comment.rating,
                productId: comment.productId,
              }}
              enableReinitialize
              onSubmit={async ({ content, productId }) => {
                const updatedComment = {
                  content,
                  productId,
                  rating,
                };
                await mutateAsync(
                  { updatedComment, id: comment.id },
                  {
                    onSuccess: () => {
                      setShow(false);
                      showMessage({
                        message: capitalizeEachWord(
                          'Berhasil Mengubah Komentar'
                        ),
                        type: 'success',
                      });
                    },
                    onError: () => {
                      setShow(false);
                      showMessage({
                        message: capitalizeEachWord(appError),
                        type: 'danger',
                      });
                    },
                  }
                );
              }}
              validationSchema={commentValidationSchema}>
              {({
                handleChange,
                handleBlur,
                handleSubmit,
                values,
                touched,
                errors,
              }) => (
                <>
                  <View style={styles.container}>
                    <Rating
                      onRating={onRatingComplete}
                      size={35}
                      defaultRating={rating}
                      otherStyle={styles.rating}
                      position="center"
                    />

                    <TextInput
                      autoFocus
                      label="Isi Komentar"
                      onChangeText={handleChange('content')}
                      onBlur={handleBlur('content')}
                      value={values.content}
                      placeholder="Isi Komentar"
                    />

                    {errors.content && touched.content && (
                      <ErrorText message={errors.content} />
                    )}

                    <SimpleButton
                      title="Edit Komentar"
                      onPress={handleSubmit}
                      loading={isLoading}
                    />
                  </View>
                </>
              )}
            </Formik>
          </>
        )}
      </View>
    </BottomSheet>
  );
};

export default EditComment;

const styles = StyleSheet.create({
  title: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginBottom: 20,
  },
  container: {
    marginVertical: 20,
  },
  rating: {
    marginBottom: 20,
    marginTop: 20,
  },
  inputContainer: {
    position: 'relative',
    backgroundColor: 'white',
    minHeight: 400,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  bottomSheetContainer: { backgroundColor: 'rgba(0.5, 0.25, 0, 0.2)' },
});
