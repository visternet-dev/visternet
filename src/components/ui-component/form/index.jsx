import { useFormik } from "formik";

import React, { useState } from "react";

import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

import CustomButton from "components/ui-component/HOC/Button";

import * as Yup from "yup";

import FieldsBuilder from "./fields";
import SectionBuilder from "./section";

/**
 * @name fields [field, ...]
 *    @name field one element of fields
 *    @property {String} id Mandatory*
 *    @property {String} type Mandatory*
 *    @property {String} label Optional - default=""
 *    @property {String} placeholder Optional - default=""
 *    @property {String} defaultValue Optional - default=""
 *    @property {Array.<Object>} options (Based on Type Field) - default=[]
 *       @name options
 *       @property {String} lable
 *       @property {String} value
 *       @property {Object} fields optional - default=[]
 *    @property {Array.<Object>} col optional - default={xs:12, sm:12, md: 12}
 *    @property {String} validationType Optional - default="String" - options= string, number, date
 *    @property {Array.<Object>} validations Optional - default="String" - options= string, number, date
 */

const FormBuilder = ({ data }) => {
  const [schema, setSchema] = useState();

  // const { sections, fields, onSubmit = (data) => console.log("----------------SUBMIT:", data) } = props;

  const onSubmit = (data) => console.log("----------------SUBMIT:", data);

  const { actions = [], sections = [] } = data;

  const formik = useFormik({
    initialValues: {},
    validationSchema: Yup.object().shape(schema),
    onSubmit
  });

  if (sections)
    return (
      <>
        {sections.map(({ type, title, fields }, index) => (
          <SectionBuilder type={type} title={title} key={index}>
            <Grid2 container xs={12}>
              <FieldsBuilder fields={fields} formik={formik} setSchema={setSchema} />
            </Grid2>
          </SectionBuilder>
        ))}

        {actions.map((action, index) => {
          return (
            <Grid2 xs={12} key={index}>
              <CustomButton onClick={formik.handleSubmit} variant="contained">
                Submit
              </CustomButton>
            </Grid2>
          );
        })}
      </>
    );
};

export default FormBuilder;
