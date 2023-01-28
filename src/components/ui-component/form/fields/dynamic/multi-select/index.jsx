import React, { useEffect, useState } from "react";

import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

import CustomAutocomplete from "components/ui-component/HOC/fields/autocomplete";
import CustomInput from "components/ui-component/HOC/fields/input";

import Fields from "../..";

function DynamicFieldMultiSelect(props) {
  const [state, setState] = useState([]);

  const { sx, options, label, id, disabled, required, placeholder, col, formik, setSchema } = props;
  const { handleBlur, setFieldValue, values, errors, touched } = formik;
  const haveError = Boolean(touched[id] && errors[id]);

  useEffect(() => {
    const optionsSeleted = options.find((option) => option?.value === values?.[id]);

    // if we have default value we update state and find option selected
    setState(optionsSeleted ?? { label: values?.[id] } ?? "");
    // setFieldValue(id, optionsSeleted?.value ?? "");

    return () => {
      setState({});
    };
  }, [options, values[id]]);

  return (
    <React.Fragment>
      <Grid2 {...col}>
        <CustomAutocomplete
          multiple
          id={id}
          sx={{ ...sx }}
          options={options}
          disabled={disabled}
          onBlur={handleBlur}
          value={["122", "21221"] ?? ""}
          //   getOptionLabel={(option) => option?.label ?? option ?? ""}
          //   isOptionEqualToValue={(option, value) => option.label === value}
          onChange={(event, value) => {
            console.log("VALUE --- ---:", value);
            setState(value);
            setFieldValue(id, value ?? "");
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

export default DynamicFieldMultiSelect;
