import * as Yup from "yup";

export function createYupSchema(schema, config) {
  const { id, validationType = "string", validations = [] } = config;

  if (!Yup[validationType]) {
    return schema;
  }

  let validator = Yup[validationType]();

  validations.forEach((validation) => {
    const { params, type } = validation;
    if (!validator[type]) {
      return;
    }
    validator = validator[type](...params);
  });

  schema[id] = validator;

  return schema;
}
