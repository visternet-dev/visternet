import React, { useEffect, useState } from "react";

import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

import CustomAutocomplete from "components/ui-component/HOC/fields/autocomplete";
import CustomInput from "components/ui-component/HOC/fields/input";

import Fields from "../..";

function DynamicFieldSelect(props) {
  // TODO: Hanlde Initial HERE sample multi select
  const [state, setState] = useState({});

  const { sx, options, label, id, disabled, required, placeholder, col, formik, setSchema } = props;
  const { handleBlur, setFieldValue, values, errors, touched } = formik;
  const haveError = Boolean(touched[id] && errors[id]);

  // TODO: Hanlde inital in defined STate
  useEffect(() => {
    const optionsSeleted = options.find((option) => option?.value === values?.[id]);

    // if we have default value we update state and find option selected
    setState(optionsSeleted ?? { label: values?.[id] } ?? "");

    return () => {
      setState({});
    };
  }, [options, values[id]]);

  return (
    <React.Fragment>
      <Grid2 {...col}>
        <CustomAutocomplete
          id={id}
          sx={{ ...sx }}
          options={options}
          disabled={disabled}
          onBlur={handleBlur}
          value={state?.label ?? ""}
          // TODO: fix console warning
          isOptionEqualToValue={(option, value) => option.label === value}
          onChange={(event, value) => {
            setState(value);
            setFieldValue(id, value?.value ?? "");
          }}
          renderInput={(params) => (
            <CustomInput {...params} label={label} error={haveError} helperText={haveError ? errors[id] : ""} required={required} placeholder={placeholder} />
          )}
        />
      </Grid2>

      <Fields fields={state?.fields} formik={formik} setSchema={setSchema} />
    </React.Fragment>
  );
}

export default DynamicFieldSelect;
