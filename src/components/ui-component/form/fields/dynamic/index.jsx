import { useEffect } from "react";

import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

import capitalize from "utils/string/capiltalize";

import { createYupSchema } from "../../builder/tools";
import DynamicFieldSelect from "./select";

const Fields = {
  Select: DynamicFieldSelect
};

function DynamicField(props) {
  const {
    options = {},
    id,
    label = "",
    placeholder = "",
    defaultValue = "",
    col = {},
    disabled = false,
    validations = [],
    validationType,
    sx = {},
    type,
    formik,
    setSchema
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
