import React, { useState } from "react";

import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

import CustomAutocomplete from "components/ui-component/HOC/fields/autocomplete";
import CustomInput from "components/ui-component/HOC/fields/input";

import Fields from "../..";

function DynamicFieldSelect(props) {
  // Destructure Data
  const { sx, options, label, id, disabled, required, placeholder, col, formik, setSchema, defaultValue } = props;
  const { handleBlur, setFieldValue, errors, touched } = formik;
  const showError = Boolean(touched[id] && errors[id]);

  // Define state for handle UI
  const [state, setState] = useState(options.find((option) => option?.value === defaultValue) ?? {});

  // Handle change
  const handleChange = (e, value) => {
    setState(value);
    setFieldValue(id, value?.value ?? "");
  };

  return (
    <React.Fragment>
      <Grid2 {...col}>
        <CustomAutocomplete
          id={id}
          sx={{ ...sx }}
          options={options}
          disabled={disabled}
          onBlur={handleBlur}
          value={state?.label ?? null}
          isOptionEqualToValue={(option, value) => option.label === value}
          onChange={handleChange}
          renderInput={(params) => (
            <CustomInput {...params} label={label} error={showError} helperText={showError ? errors[id] : ""} required={required} placeholder={placeholder} />
          )}
        />
      </Grid2>

      {/* Show Depended Fields */}
      <Fields fields={state?.fields} formik={formik} setSchema={setSchema} />
    </React.Fragment>
  );
}

export default DynamicFieldSelect;
