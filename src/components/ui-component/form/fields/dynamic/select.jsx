import React, { useState } from "react";

import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

import CustomAutocomplete from "components/ui-component/HOC/fields/autocomplete";
import CustomInput from "components/ui-component/HOC/fields/input";

import DynamicField from ".";
import FormBuilder from "../../builder";

function DynamicFieldSelect(props) {
  const [state, setState] = useState({});

  const { sx, options, label, id, disabled, required, placeholder, col, formik, setSchema } = props;
  const { handleBlur, setFieldValue, values, errors, touched } = formik;
  const haveError = Boolean(touched[id] && errors[id]);
  const { xs = 12, sm = 12, md = 12 } = col;

  return (
    <React.Fragment>
      <Grid2 xs={xs} sm={sm} md={md}>
        <CustomAutocomplete
          id={id}
          sx={{ ...sx }}
          options={options}
          disabled={disabled}
          onBlur={handleBlur}
          value={options.find((option) => option?.id === values?.[id])?.label ?? values?.[id] ?? ""}
          onChange={(event, value) => {
            console.log("value:", value);
            setState(value);
            setFieldValue(id, value?.id ?? "");
          }}
          renderInput={(params) => (
            <CustomInput {...params} label={label} error={haveError} helperText={haveError ? errors[id] : ""} required={required} placeholder={placeholder} />
          )}
        />
      </Grid2>

      {state?.fields && state?.fields?.map((fieldProps, index) => <DynamicField {...fieldProps} formik={formik} setSchema={setSchema} key={index} />)}
    </React.Fragment>
  );
}

export default DynamicFieldSelect;
