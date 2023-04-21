import { useEffect } from "react";

import { createYupSchema } from "utils/schema";

import DynamicFieldCheckbox from "./checkbox";
import DynamicDatePicker from "./date-picker";
import DynamicFieldMultiSelect from "./multi-select";
import DynamicFieldPassword from "./password";
import DynamicFieldRadio from "./radio";
import DynamicFieldSelect from "./select";
import DynamicFieldText from "./text";
import DynamicFieldTextarea from "./textarea";
import DynamicFieldToggle from "./toggle";

const Fields = {
  select: DynamicFieldSelect,
  checkbox: DynamicFieldCheckbox,
  "multi-select": DynamicFieldMultiSelect,
  textarea: DynamicFieldTextarea,
  text: DynamicFieldText,
  toggle: DynamicFieldToggle,
  radio: DynamicFieldRadio,
  password: DynamicFieldPassword,
  date: DynamicDatePicker
};

const initials = {
  select: "",
  checkbox: {},
  "multi-select": [],
  textarea: "",
  text: ""
};

function DynamicField(props) {
  const {
    id,
    type,
    formik,
    sx = {},
    col = {},
    setSchema,
    label = "",
    options = {},
    validationType,
    disabled = false,
    placeholder = "",
    validations = [],
    defaultValue = initials?.[type] ?? ""
  } = props;

  const required = validations.some((validation) => validation.type === "required");

  useEffect(() => {
    setSchema((prev) => ({ ...prev, [id]: createYupSchema({ validationType, validations }) }));

    return () => {
      formik.setFieldValue(id, defaultValue);
    };
  }, []);

  const params = {
    sx,
    id,
    col,
    label,
    formik,
    options,
    required,
    disabled,
    setSchema,
    placeholder,
    defaultValue
  };

  const Field = Fields?.[type];

  if (Field) return <Field {...params} />;

  // on Error
  return <></>;
}

export default DynamicField;
