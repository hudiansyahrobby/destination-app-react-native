import * as yup from 'yup';

const destinationValidationSchema = yup.object().shape({
  name: yup.string().trim().required('Nama Destinasi Harus Diisi'),
  province: yup.string().trim().required('Provinsi Harus Diisi'),
  city: yup.string().trim().required('Kota Harus Diisi'),
  description: yup
    .string()
    .trim()
    .max(5000, 'Deskripsi Tidak Boleh Lebih Dari 5000 Karakter')
    .required('Dekripsi Harus Diisi'),
  categoryId: yup.string().trim().required('Kategori Harus Diisi'),
});

export default destinationValidationSchema;
