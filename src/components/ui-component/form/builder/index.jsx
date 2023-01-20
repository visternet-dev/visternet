import { useFormik } from "formik";

import React from "react";

import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

import CustomButton from "components/ui-component/HOC/Button";

import * as Yup from "yup";

import DynamicField from "../fields/dynamic";
import { generateInitialValue } from "./tools";

function FormBuilder(props) {
  const { fields, onSubmit = (r) => console.log(r) } = props;

  const formik = useFormik({
    initialValues: generateInitialValue(fields),
    validationSchema: Yup.object({
      selectName: Yup.string().max(15, "Must be 15 characters or less").required("Required"),
      lastName: Yup.string().max(20, "Must be 20 characters or less").required("Required"),
      email: Yup.string().email("Invalid email address").required("Required")
    }),
    onSubmit: (r) => console.log(r)
  });

  return (
    <Grid2 container sx={{ height: "100vh", alignItems: "center", px: 10 }} spacing={4}>
      {fields.map((fieldProps, index) => (
        <DynamicField {...fieldProps} formik={formik} key={index} />
      ))}

      <CustomButton onClick={formik.handleSubmit} variant="contained">
        test
      </CustomButton>
    </Grid2>
  );
}

export default FormBuilder;

const SignupForm = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: ""
    },
    validationSchema: Yup.object({
      firstName: Yup.string().max(15, "Must be 15 characters or less").required("Required"),
      lastName: Yup.string().max(20, "Must be 20 characters or less").required("Required"),
      email: Yup.string().email("Invalid email address").required("Required")
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    }
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="firstName">First Name</label>
      <input
        id="firstName"
        name="firstName"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.firstName}
      />
      {formik.touched.firstName && formik.errors.firstName ? <div>{formik.errors.firstName}</div> : null}

      <label htmlFor="lastName">Last Name</label>
      <input
        id="lastName"
        name="lastName"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.lastName}
      />
      {formik.touched.lastName && formik.errors.lastName ? <div>{formik.errors.lastName}</div> : null}

      <label htmlFor="email">Email Address</label>
      <input id="email" name="email" type="email" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} />
      {formik.touched.email && formik.errors.email ? <div>{formik.errors.email}</div> : null}

      <button type="submit">Submit</button>
    </form>
  );
};
