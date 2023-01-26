import { useFormik } from "formik";

import React, { useState } from "react";

import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

import CustomButton from "components/ui-component/HOC/Button";

import * as Yup from "yup";

import Fields from "../fields";

const FormBuilder = (props) => {
  const [schema, setSchema] = useState();

  const { fields, onSubmit = (data) => console.log("----------------SUBMIT:", data) } = props;

  const formik = useFormik({
    initialValues: {},
    validationSchema: Yup.object().shape(schema),
    onSubmit
  });

  if (fields)
    return (
      <>
        <Fields fields={fields} formik={formik} setSchema={setSchema} />

        <Grid2 xs={12}>
          <CustomButton onClick={formik.handleSubmit} variant="contained">
            Submit
          </CustomButton>
        </Grid2>
      </>
    );
};

export default FormBuilder;
