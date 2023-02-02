import React, { useState } from "react";

import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

import CustomAutocomplete from "components/ui-component/HOC/fields/autocomplete";
import CustomInput from "components/ui-component/HOC/fields/input";

import Fields from "../..";
import { serializerFields, serializerValue } from "./tools";

function DynamicFieldMultiSelect(props) {
  // Destructure Data
  const { sx, options, label, id, disabled, required, placeholder, col, formik, setSchema, defaultValue } = props;
  const { handleBlur, setFieldValue, errors, touched } = formik;
  const showError = Boolean(touched[id] && errors[id]);

  // Define state for handle UI
  const [state, setState] = useState(
    options.filter((option) => {
      return defaultValue?.includes(option?.value);
    }) ?? []
  );

  // Handle change
  const handleChange = (e, value) => {
    setState(value);
    setFieldValue(id, serializerValue(value));
  };

  return (
    <React.Fragment>
      <Grid2 {...col}>
        <CustomAutocomplete
          multiple
          id={id}
          value={state}
          sx={{ ...sx }}
          options={options}
          disabled={disabled}
          onBlur={handleBlur}
          onChange={handleChange}
          getOptionLabel={(option) => option?.label ?? option ?? ""}
          renderInput={(params) => (
            <CustomInput {...params} label={label} error={showError} helperText={showError ? errors[id] : ""} required={required} placeholder={placeholder} />
          )}
        />
      </Grid2>

      {/* Show Depended Fields */}
      <Fields fields={serializerFields(state)} formik={formik} setSchema={setSchema} />
    </React.Fragment>
  );
}

export default DynamicFieldMultiSelect;
