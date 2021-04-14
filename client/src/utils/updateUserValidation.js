import * as yup from 'yup';

const updateUserValidation = yup.object({
  firstName: yup.string().min(3),
  lastName: yup.string().min(3),
  mobile: yup.number().min(9),
  address: yup.string(),
  country: yup.string(),
  city: yup.string(),
  altMobile: yup.number().min(9),
});

export default updateUserValidation;
