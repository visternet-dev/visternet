import * as Yup from "yup";

export function createYupSchemaReduce(schema, config) {
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

export function createYupSchema({ validationType = "string", validations = [] }) {
  let validator = Yup[validationType]();

  validations.forEach((validation) => {
    const { params, type } = validation;
    if (!validator[type]) {
      return;
    }
    validator = validator[type](...params);
  });

  return validator;
}

export const test = (fields) => {
  if (!fields) return;

  Object.fromEntries(
    fields.map((field) => {
      field?.options.map((option) => test(test));

      return [field.id, field.defaultValue];
    })
  );
};
