import * as yup from 'yup';

const loginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .trim()
    .email('Email Tidak Valid')
    .required('Email Harus Diisi'),
  password: yup.string().required('Password Harus Diisi'),
});

export default loginValidationSchema;
