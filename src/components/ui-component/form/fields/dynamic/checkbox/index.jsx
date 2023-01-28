import React, { useEffect, useState } from "react";

import { FormControl, FormHelperText } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

import { useTheme } from "@emotion/react";

import Fields from "../..";
import styles from "./styles";

function DynamicFieldCheckbox(props) {
  const [state, setState] = useState({});
  const theme = useTheme();

  const { sx, options, label, id, disabled, required, col, formik, setSchema } = props;
  const { handleBlur, setFieldValue, values, errors, touched } = formik;
  const haveError = Boolean(touched[id] && errors[id]);

  useEffect(() => {
    // if we have default value we update state and find option selected
    setState(options.find((option) => option?.value === values?.[id]) ?? {});

    // return () => {
    //   setState({});
    // };
  }, [options, values?.[id]]);

  console.log("--------------");
  console.log("state", state, state?.value);
  console.log("--------------");
  console.count();

  const test = true;

  return (
    <React.Fragment>
      <Grid2 {...col}>
        <FormControl required={required} error={haveError} onBlur={handleBlur} sx={{ ...sx }} fullWidth>
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
              control={<Checkbox disabled={disabled} checked={values[id]} />}
              label={label}
              sx={{ ...styles(theme) }}
            />
          </FormGroup>
          {haveError && <FormHelperText>{errors[id]}</FormHelperText>}
        </FormControl>
      </Grid2>

      <Fields fields={state?.fields} formik={formik} setSchema={setSchema} />
    </React.Fragment>
  );
}

export default DynamicFieldCheckbox;
