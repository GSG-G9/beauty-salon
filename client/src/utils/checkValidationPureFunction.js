const updateAndValidateInput = (
  schemaKey,
  schema,
  setValue,
  setIsValid
) => async ({ target: { value } }) => {
  setValue(value);
  const isValidResult = await schema.isValid({ [schemaKey]: value });
  setIsValid(!isValidResult);
};

export default updateAndValidateInput;
