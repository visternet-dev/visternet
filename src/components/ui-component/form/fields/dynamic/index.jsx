import { useEffect } from "react";

import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

import { createYupSchema } from "utils/schema";
import capitalize from "utils/string/capiltalize";

import DynamicFieldCheckbox from "./checkbox";
import DynamicFieldSelect from "./select";

const Fields = {
  Select: DynamicFieldSelect,
  Checkbox: DynamicFieldCheckbox
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
    defaultValue = ""
  } = props;
  const required = validations.some((validation) => validation.type === "required");

  useEffect(() => {
    formik.setFieldValue(id, defaultValue);
    setSchema((prev) => ({ ...prev, [id]: createYupSchema({ validationType, validations }) }));

    return () => {
      console.log("delete component");
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
    placeholder
  };

  const Field = Fields?.[capitalize(type)];

  if (Field) return <Field {...params} />;

  // on Error
  return (
    <Grid2 xs={12} sx={{ color: "red" }}>
      This Field is not found!
    </Grid2>
  );
}

export default DynamicField;
