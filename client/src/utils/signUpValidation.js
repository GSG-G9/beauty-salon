import * as yup from 'yup';

export const firstNameSchema = yup.object({
  firstName: yup.string().min(3).required(),
});
export const lastNameSchema = yup.object({
  lastName: yup.string().min(3).required(),
});
export const emailSchema = yup.object({
  email: yup.string().email().required(),
});
export const passwordSchema = yup.object({
  password: yup.string().min(6).required(),
});
export const confirmPasswordSchema = yup.object({
  confirmPassword: yup.string().min(6).required(),
});
