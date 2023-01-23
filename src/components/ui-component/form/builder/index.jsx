import { useFormik } from "formik";

import React, { forwardRef, useImperativeHandle, useState } from "react";

import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

import CustomButton from "components/ui-component/HOC/Button";

import * as Yup from "yup";

import DynamicField from "../fields/dynamic";

const FormBuilder = (props) => {
  const [schema, setSchema] = useState();

  const { fields, onSubmit = (r) => console.log("---- SUBMIT:", r) } = props;

  const formik = useFormik({
    initialValues: {},
    validationSchema: Yup.object().shape(schema),
    enableReinitialize: true,
    onSubmit
  });

  const fieldParams = {
    formik,
    setSchema
  };

  if (fields)
    return (
      <>
        {fields.map((fieldProps, index) => (
          <DynamicField {...fieldProps} {...fieldParams} key={index} />
        ))}
        <CustomButton onClick={formik.handleSubmit} variant="contained">
          Submit
        </CustomButton>
      </>
    );
};

export default FormBuilder;
