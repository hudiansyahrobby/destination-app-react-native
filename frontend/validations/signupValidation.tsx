import * as yup from 'yup';

const signUpValidationSchema = yup.object().shape({
  displayName: yup
    .string()
    .trim()
    .matches(/^[a-zA-Z ]*$/, 'Nama Hanya Boleh Mengandung Huruf Atau Spasi')
    .required('Nama Harus Diisi'),
  email: yup
    .string()
    .trim()
    .email('Email Tidak Valid')
    .required('Email Harus Diisi'),
  password: yup
    .string()
    .min(8, 'Password Minimal 8 Karakter')
    .matches(
      /^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/,
      'Password Harus Terdiri Dari Minimal Satu Huruf Besar, Satu Huruf Kecil Satu Angka, dan Satu Karakter Spesial '
    )
    .required('Password Harus Diisi'),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref('password')], 'Password Tidak Sama')
    .required('Konfirmasi Password Harus Diisi'),
});

export default signUpValidationSchema;
