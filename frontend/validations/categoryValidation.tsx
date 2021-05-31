import * as yup from 'yup';

const categoryValidationSchema = yup.object().shape({
  id: yup.string().trim(),
  name: yup
    .string()
    .trim()
    .matches(
      /^[a-zA-Z ]*$/,
      'Nama Kategori Hanya Boleh Mengandung Huruf Atau Spasi'
    )
    .required('Nama Kategori Harus Diisi'),
});

export default categoryValidationSchema;
