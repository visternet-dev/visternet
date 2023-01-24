import React, { useEffect, useState } from "react";

import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

import CustomAutocomplete from "components/ui-component/HOC/fields/autocomplete";
import CustomInput from "components/ui-component/HOC/fields/input";

import Fields from "../..";

function DynamicFieldSelect(props) {
  const [state, setState] = useState({});

  const { sx, options, label, id, disabled, required, placeholder, col, formik, setSchema } = props;
  const { handleBlur, setFieldValue, values, errors, touched } = formik;
  const haveError = Boolean(touched[id] && errors[id]);

  useEffect(() => {
    const optionsSeleted = options.find((option) => option?.value === values?.[id]);

    // if we have default value we update state and find option selected
    setState(optionsSeleted);
    // setFieldValue(id, optionsSeleted?.value ?? "");

    return () => {
      setState({});
      setFieldValue(id, "");
    };
  }, [options]);

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

      <Fields fields={state?.fields} formik={formik} setSchema={setSchema} animation />
    </React.Fragment>
  );
}

export default DynamicFieldSelect;
