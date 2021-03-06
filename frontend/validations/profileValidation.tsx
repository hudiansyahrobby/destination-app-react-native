import * as yup from 'yup';

const profileValidationSchema = yup.object().shape({
  displayName: yup
    .string()
    .trim()
    .matches(/^[a-zA-Z ]*$/, 'Nama Hanya Boleh Mengandung Huruf Atau Spasi')
    .required('Nama Harus Diisi'),
  country: yup.string().trim().required('Negara Harus Diisi'),
  about: yup
    .string()
    .trim()
    .required('Deskripsi Harus Diisi')
    .min(25, 'Deskripsi Minimal 25 Huruf')
    .max(1500, 'Deskripsi Maksimal 1500 Huruf'),
});

export default profileValidationSchema;
