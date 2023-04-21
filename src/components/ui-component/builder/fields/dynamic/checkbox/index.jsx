import React, { useState } from "react";

import { FormControl, FormHelperText, Stack, Typography } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

import CustomFormGroup from "components/ui-component/custom/form-group";
import CustomInpuLabel from "components/ui-component/custom/input-label";

import Fields from "../..";
import { serializerFields } from "./tools";

// TODO: Handle default Value / and Handle Semilar multi select
function DynamicFieldCheckbox(props) {
  const { sx, options, label, id, disabled, required, defaultValue, col, formik, setSchema } = props;
  const { handleBlur, setFieldValue, values, errors, touched } = formik;
  const haveError = Boolean(touched[id] && errors[id]);
  const [state, setState] = useState({});

  // TODO: should be add use Effect for Clear value on mounted

  return (
    <React.Fragment>
      <Grid2 {...col}>
        <FormControl required={required} error={haveError} onBlur={handleBlur} sx={{ ...sx }} fullWidth>
          <CustomFormGroup label={label}>
            {label && <CustomInpuLabel required>{label}</CustomInpuLabel>}

            <Stack direction="row" justifyContent="space-between">
              {options.map((item, index) => {
                return (
                  <FormControlLabel
                    onChange={(e, value) => {
                      const fields = item?.fields ?? [];

                      setState((prev) => ({ ...prev, [item.value]: { fields: value ? fields : [] } }));
                      setFieldValue(id, { ...(values?.[id] ?? {}), [item.value]: value });
                    }}
                    control={<Checkbox disabled={disabled} checked={values?.[id]?.[item.value] ?? false} size="small" />}
                    label={<Typography>{item?.label}</Typography>}
                    key={index}
                  />
                );
              })}
            </Stack>
          </CustomFormGroup>
          {haveError && <FormHelperText>{errors[id]}</FormHelperText>}
        </FormControl>
      </Grid2>

      <Fields fields={serializerFields(state)} formik={formik} setSchema={setSchema} />
    </React.Fragment>
  );
}

export default DynamicFieldCheckbox;
