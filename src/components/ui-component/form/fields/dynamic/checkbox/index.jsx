import React, { useEffect, useState } from "react";

import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

import { useTheme } from "@emotion/react";

import CustomAutocomplete from "components/ui-component/HOC/fields/autocomplete";
import CustomInput from "components/ui-component/HOC/fields/input";

import Fields from "../..";
import styles from "./styles";

function DynamicFieldCheckbox(props) {
  const [state, setState] = useState({});
  const theme = useTheme();

  const { sx, options, label, id, disabled, required, placeholder, col, formik, setSchema } = props;
  const { handleBlur, setFieldValue, values, errors, touched } = formik;
  const haveError = Boolean(touched[id] && errors[id]);

  useEffect(() => {
    // if we have default value we update state and find option selected
    setState(options.find((option) => option?.value === values?.[id]) ?? {});

    return () => {
      setState({});
    };
  }, [options]);

  return (
    <React.Fragment>
      <Grid2 {...col}>
        {/* <CustomAutocomplete
          id={id}
          sx={{ ...sx }}
          options={options}
          disabled={disabled}
          onBlur={handleBlur}
          value={state?.label ?? ""}
          onChange={(event, value) => {
            setState(value);
            setFieldValue(id, value?.id ?? "");
          }}
          renderInput={(params) => (
            <CustomInput {...params} label={label} error={haveError} helperText={haveError ? errors[id] : ""} required={required} placeholder={placeholder} />
          )}
        /> */}

        <FormGroup>
          <FormControlLabel
            onChange={(e, value) => {
              console.log("value:", value);
              setState(
                options.find((option) => {
                  console.log("000000", option, value);
                  return option?.value === value;
                })
              );
              setFieldValue(id, value ?? "");
            }}
            control={<Checkbox />}
            label={label}
            sx={{ ...styles(theme) }}
          />
        </FormGroup>
      </Grid2>

      <Fields fields={state?.fields} formik={formik} setSchema={setSchema} />
    </React.Fragment>
  );
}

export default DynamicFieldCheckbox;
