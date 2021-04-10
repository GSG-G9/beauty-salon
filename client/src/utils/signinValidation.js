import * as yup from 'yup';

export const emailSchema = yup.object({
  email: yup.string().email().required(),
});
export const passwordSchema = yup.object({
  password: yup.string().min(8).required(),
});
