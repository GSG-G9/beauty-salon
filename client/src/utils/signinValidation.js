import * as yup from 'yup';

export const emailSchemaValid = yup.object({
  email: yup.string().email().required(),
});
export const passwordSchemaValid = yup.object({
  password: yup.string().min(6).required(),
});
