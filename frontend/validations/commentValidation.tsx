import * as yup from 'yup';

const commentValidationSchema = yup.object().shape({
  productId: yup.string().trim().required('Kategori ID Harus Diisi'),
  rating: yup
    .number()
    .max(5, 'Rating Tidak Boleh Lebih Daripada 5')
    .min(1, 'Rating Tidak Boleh Lebih Kecil Daripada 1')
    .required('Nama Kategori Harus Diisi'),
  content: yup.string().trim().required('Komentar Tidak Boleh Kosong'),
});

export default commentValidationSchema;
