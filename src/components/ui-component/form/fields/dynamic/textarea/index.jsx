import React, { useState } from "react";

import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

import CustomInput from "components/ui-component/HOC/fields/input";

import Fields from "../..";

function DynamicFieldTextarea(props) {
  // Destructure Data
  const { sx, label, id, disabled, required, placeholder, col, formik, setSchema, defaultValue } = props;
  const { handleBlur, setFieldValue, errors, touched } = formik;
  const showError = Boolean(touched[id] && errors[id]);

  // Define state for handle UI
  const [state, setState] = useState(defaultValue);

  // Handle change
  const handleChange = (e) => {
    setState(e.target.value);
    setFieldValue(id, e.target.value);
  };

  return (
    <React.Fragment>
      <Grid2 {...col}>
        <CustomInput
          id={id}
          rows={4}
          multiline
          fullWidth
          sx={{ ...sx }}
          value={state}
          label={label}
          error={showError}
          disabled={disabled}
          required={required}
          onBlur={handleBlur}
          onChange={handleChange}
          placeholder={placeholder}
          helperText={showError ? errors[id] : ""}
        />
      </Grid2>

      {/* Show Depended Fields */}
      <Fields fields={state?.fields} formik={formik} setSchema={setSchema} />
    </React.Fragment>
  );
}

export default DynamicFieldTextarea;
