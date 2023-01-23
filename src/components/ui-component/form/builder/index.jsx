import { useFormik } from "formik";

import React from "react";

import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

import CustomButton from "components/ui-component/HOC/Button";

import * as Yup from "yup";

import DynamicField from "../fields/dynamic";
import { createYupSchema } from "./tools";

function FormBuilder(props) {
  const { fields, onSubmit = (r) => console.log(r) } = props;
  const yupSchema = fields.reduce(createYupSchema, {});

  const formik = useFormik({
    initialValues: Object.fromEntries(fields.map((field) => [field.id, field.defaultValue])),
    validationSchema: Yup.object().shape(yupSchema),
    onSubmit
  });

  return (
    <Grid2 container spacing={4} sx={{ width: "100%" }}>
      {fields.map((fieldProps, index) => (
        <DynamicField {...fieldProps} formik={formik} key={index} />
      ))}

      <CustomButton onClick={formik.handleSubmit} variant="contained">
        Submit
      </CustomButton>
    </Grid2>
  );
}

export default FormBuilder;
