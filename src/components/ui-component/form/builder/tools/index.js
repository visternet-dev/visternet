export const generateInitialValue = (fields = []) => {
  const initialValue = {};

  fields.forEach(({ name, defaultValue = "" }) => {
    initialValue[name] = defaultValue;
  });

  return initialValue;
};
