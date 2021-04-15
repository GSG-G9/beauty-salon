import * as yup from 'yup';

const updateUserValidation = yup.object({
  firstName: yup.string().min(3),
  lastName: yup.string().min(3),
  address: yup.string(),
  mobile: yup.number().min(9),
});

export default updateUserValidation;
