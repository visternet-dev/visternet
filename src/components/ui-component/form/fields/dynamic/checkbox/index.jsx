import React, { useEffect, useState } from "react";

import { FormControl, FormHelperText, Stack, Typography } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { Box } from "@mui/system";

import { useTheme } from "@emotion/react";

import CustomFormGroup from "components/ui-component/custom/form-group";
import CustomInpuLabel from "components/ui-component/custom/input-label";
import InputLabel from "components/ui-component/extended/Form/InputLabel";

import Fields from "../..";
import styles from "./styles";

function DynamicFieldCheckbox(props) {
  const theme = useTheme();

  const { sx, options, label, id, disabled, required, defaultValue, col, formik, setSchema } = props;
  const { handleBlur, setFieldValue, values, errors, touched } = formik;
  const haveError = Boolean(touched[id] && errors[id]);
  const [state, setState] = useState(options.find((option) => option?.value === defaultValue) ?? {});

  return (
    <React.Fragment>
      <Grid2 {...col}>
        <FormControl required={required} error={haveError} onBlur={handleBlur} sx={{ ...sx }} fullWidth>
          <CustomFormGroup label={label}>
            {label && <CustomInpuLabel required>{label}</CustomInpuLabel>}

            <Stack direction="row" justifyContent="space-between">
              {options.map((item) => {
                return (
                  <FormControlLabel
                    onChange={(e, value) => {
                      setState(
                        options.find((option) => {
                          return option?.value === value;
                        })
                      );
                      setFieldValue(id, value ?? "");
                    }}
                    control={<Checkbox disabled={disabled} checked={values[id]} size="small" />}
                    label={<Typography>{item?.label}</Typography>}
                  />
                );
              })}
            </Stack>
          </CustomFormGroup>
          {haveError && <FormHelperText>{errors[id]}</FormHelperText>}
        </FormControl>
      </Grid2>

      <Fields fields={state?.fields} formik={formik} setSchema={setSchema} />
    </React.Fragment>
  );
}

export default DynamicFieldCheckbox;
