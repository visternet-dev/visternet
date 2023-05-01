import dayjs from "dayjs";

import React, { useEffect, useState } from "react";

import TextField from "@mui/material/TextField";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

import CustomInput from "components/ui-component/custom/input";

function DynamicDatePicker(props) {
  // Destructure Data
  const { sx, label, id, disabled, required, placeholder, col, formik, setSchema, defaultValue } = props;
  const { handleBlur, setFieldValue, errors, touched, values } = formik;
  const showError = Boolean(touched[id] && errors[id]);

  // Define state for handle UI
  const [state, setState] = useState(defaultValue);

  // when value change from other things state shoud be change
  useEffect(() => {
    setState(values[id] ?? defaultValue ?? "");
  }, [values?.[id]]);

  // Handle change
  const handleChange = (e) => {
    setState(e.target.value);
    setFieldValue(id, e.target.value);
  };

  return (
    <React.Fragment>
      <Grid2 {...col}>
        {/* <CustomInput
          id={id}
          fullWidth
          sx={{ ...sx }}
          value={state}
          label={label}
          error={showError}
          disabled={disabled}
          required={required}
          onBlur={handleBlur}
          onChange={handleChange}
          placeholder={placeholder}
          helperText={showError ? errors[id] : ""}
        /> */}

        {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker />
        </LocalizationProvider> */}

        {/* !! TODO: must be change  */}
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          {/* <DemoContainer components={["DatePicker", "DatePicker"]}> */}
          <DatePicker
            defaultValue={dayjs("")}
            format={"YY-MM-DD"}
            value={dayjs(state || "")}
            id={id}
            sx={{ ...sx }}
            label={label}
            error={showError}
            disabled={disabled}
            required={required}
            onBlur={handleBlur}
            onChange={handleChange}
            placeholder={placeholder}
            helperText={showError ? errors[id] : ""}
            renderInput={(props) => <CustomInput value="" defaultValue="" {...props} />}
            // onChange={(value) => {
            //   console.log(value, dayjs(value).format("YYYY-MM-DD"));
            // }}
          />
          {/* </DemoContainer> */}
        </LocalizationProvider>
      </Grid2>
    </React.Fragment>
  );
}

export default DynamicDatePicker;
