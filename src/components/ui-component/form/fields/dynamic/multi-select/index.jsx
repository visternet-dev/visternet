import React, { useEffect, useState } from "react";

import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

import CustomAutocomplete from "components/ui-component/HOC/fields/autocomplete";
import CustomInput from "components/ui-component/HOC/fields/input";

import Fields from "../..";

function DynamicFieldMultiSelect(props) {
  const { sx, options, label, id, disabled, required, placeholder, col, formik, setSchema, defaultValue } = props;
  const { handleBlur, setFieldValue, values, errors, touched } = formik;
  const haveError = Boolean(touched[id] && errors[id]);

  const [state, setState] = useState(
    options.filter((option) => {
      console.log("test:", defaultValue?.includes(option?.value), option, defaultValue);
      return defaultValue?.includes(option?.value);
    }) ?? []
  );

  console.log("state:", state);

  const serializer = (data, name) => {
    return data.map((item) => {
      return item?.[name];
    });
  };

  const serializerFields = (data) => {
    return data.reduce((fields, obj) => {
      return [...fields, ...obj?.fields];
    }, []);
  };

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
          value={state}
          getOptionLabel={(option) => option?.label ?? option ?? ""}
          onChange={(event, value) => {
            setState(value);
            setFieldValue(id, serializer(value, "value"));
          }}
          renderInput={(params) => (
            <CustomInput {...params} label={label} error={haveError} helperText={haveError ? errors[id] : ""} required={required} placeholder={placeholder} />
          )}
        />
      </Grid2>

      <Fields fields={serializerFields(state)} formik={formik} setSchema={setSchema} />
    </React.Fragment>
  );
}

export default DynamicFieldMultiSelect;
