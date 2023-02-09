import { useFormik } from "formik";

import React, { useState } from "react";

import { useMutation } from "@tanstack/react-query";

import axios from "utils/axios";

import * as Yup from "yup";

import ActionsBuilder from "./actions";
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
  // Destructure Data
  const { actions = [], sections = [], api = "", method = "post" } = data;

  // State for handle schema
  const [schema, setSchema] = useState();

  // Handle Submit & Update
  const { mutate, isLoading } = useMutation((data) => {
    return axios[method](api, data);
  });

  // use formik for controll form
  const formik = useFormik({
    initialValues: {},
    validationSchema: Yup.object().shape(schema),
    onSubmit: (data) => {
      mutate(data);
    }
  });

  // LOGS
  console.groupCollapsed("formik");
  console.log("--- -- VALUE -- ---");
  console.table(formik.values);

  console.log("--- -- ERROR -- ---");
  console.table(formik.errors);
  console.groupEnd();

  if (sections)
    return (
      <>
        {/* Sections */}
        {sections.map(({ type, title, fields, actions = [], ...params }, index) => (
          <SectionBuilder type={type} title={title} key={index} fields={fields} formik={formik} setSchema={setSchema} actions={actions} {...params} />
        ))}

        {/* Actions */}
        {/* <Grid2 xs={12}>
          <Stack direction="row" spacing={2}>
            {actions.map(({ title, type, ...params }, index) => {
              return <ActionsBuilder type={type} title={title} loading={isLoading} formik={formik} key={index} {...params} />;
            })}
          </Stack>
        </Grid2> */}

        <ActionsBuilder actions={actions} />
      </>
    );
};

export default FormBuilder;
