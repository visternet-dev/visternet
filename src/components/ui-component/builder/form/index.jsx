import { useFormik } from "formik";

import React, { useState } from "react";

import { useMutation } from "@tanstack/react-query";

import axios from "utils/axios";

import * as Yup from "yup";

import ActionsBuilder from "../actions";
import SectionsBuilder from "../sections";
import DynamicSection from "../sections/dynamic";

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

const FormBuilder = ({ data, calltoactions = {} }) => {
  // TODO: should be completed
  // Handle call to actions
  const { onSubmit, onReset, onCancel, onNextStep, onBeforeStep, onSuccess, onError } = calltoactions;

  // Destructure Data
  const { parent = {}, sections = [], actions = [], api = "", method = "post" } = data;

  // State for handle schema
  const [schema, setSchema] = useState();

  // Handle API call Actions
  const { mutate, isLoading } = useMutation(({ data, api }) => {
    const { method = "post", url, body, params } = api;

    return axios({
      method,
      url,
      data: {
        ...body,
        ...data
      },
      params: {
        ...params
      }
    });
  });

  // const overWriteActions = (action) => {
  //   for

  // };

  // use formik for controll form
  const formik = useFormik({
    initialValues: {},
    validationSchema: Yup.object().shape(schema),
    onSubmit,
    onReset
  });

  if (sections)
    return (
      <DynamicSection title={parent?.title} type={parent?.type}>
        {/* Sections */}
        <SectionsBuilder sections={sections} actions={actions} formik={formik} setSchema={setSchema} />

        {/* Actions */}
        <ActionsBuilder actions={actions} formik={formik} isLoading={isLoading} mutate={mutate} calltoactions={calltoactions} />
      </DynamicSection>
    );
};

export default FormBuilder;
