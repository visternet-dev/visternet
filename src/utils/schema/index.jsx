import * as Yup from "yup";

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
