const updateAndValidateInput = (
  schemaKey,
  schema,
  setValue,
  setIsValid,
  setMis
) => async ({ target: { value } }) => {
  if (setMis) setMis(false);
  setValue(value);
  const isValidResult = await schema.isValid({ [schemaKey]: value });
  setIsValid(!isValidResult);
};

export default updateAndValidateInput;
