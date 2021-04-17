import * as yup from 'yup';

const contactValidationSchema = yup.object({
  username: yup.string().required(),
  email: yup.string().email().required(),
  mobile: yup.number().min(9, 'mobile must be at least 9 digits').required(),
  message: yup.string().max(200, 'message must be under 200 char').required(),
});

export default contactValidationSchema;
