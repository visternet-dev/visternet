import React, { useState } from "react";

import { FormControl, FormHelperText, Stack, Switch, Typography } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

import CustomFormGroup from "components/ui-component/custom/form-group";

import Fields from "../..";

function DynamicFieldToggle(props) {
  const { sx, options, label, id, disabled, required, defaultValue, col, formik, setSchema } = props;
  const { handleBlur, setFieldValue, values, errors, touched } = formik;
  const haveError = Boolean(touched[id] && errors[id]);

  const [state, setState] = useState(options?.find((option) => option.value == defaultValue)?.fields || []);

  return (
    <React.Fragment>
      <Grid2 {...col}>
        <FormControl required={required} error={haveError} onBlur={handleBlur} sx={{ ...sx }} fullWidth>
          <CustomFormGroup>
            <Stack direction="row" justifyContent="space-between">
              <FormControlLabel
                onChange={(e, value) => {
                  setState(options?.find((option) => option.value == value)?.fields || []);

                  setFieldValue(id, value);
                }}
                control={<Switch disabled={disabled} checked={values?.[id] ?? false} />}
                label={<Typography>{label}</Typography>}
              />
            </Stack>
          </CustomFormGroup>
          {haveError && <FormHelperText>{errors[id]}</FormHelperText>}
        </FormControl>
      </Grid2>

      <Fields fields={state} formik={formik} setSchema={setSchema} />
    </React.Fragment>
  );
}

export default DynamicFieldToggle;
