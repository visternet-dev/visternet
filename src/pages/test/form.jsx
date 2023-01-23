import React, { useRef } from "react";

import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { Box, Stack } from "@mui/system";

import FormBuilder from "components/ui-component/form/builder";

/**
 * @name fields [field, ...]
 * @name field one element of fields
 * @property {String} id Mandatory*
 * @property {String} type Mandatory*
 * @property {String} label Optional - default=""
 * @property {String} placeholder Optional - default=""
 * @property {String} defaultValue Optional - default=""
 * @property {Array.<Object>} options (Based on Type Field) - default=[]
 * @property {Array.<Object>} col optional - default={xs:12, sm:12, md: 12}
 * @property {String} validationType Optional - default="String" - options= string, number, date
 * @property {Array.<Object>} validations Optional - default="String" - options= string, number, date
 */

const muckFields = [
  {
    id: "selectName",
    type: "select",
    label: "test",
    placeholder: "test",
    defaultValue: "test2",
    options: [
      {
        label: "test option",
        id: "test1",
        fields: [
          {
            id: "selectName2343434",
            type: "select",
            label: "999999999",
            placeholder: "test22222",
            defaultValue: "test192",
            options: [{ label: "options 2", id: "test192", fields: [] }],
            col: { md: 4, sm: 6, xs: 12 },
            validationType: "string",
            validations: [
              {
                type: "required",
                params: ["this field is required"]
              }
              // {
              //   type: "min",
              //   params: [1, "name cannot be less than 5 characters"]
              // },
              // {
              //   type: "max",
              //   params: [2, "name cannot be more than 10 characters"]
              // }
            ]
          }
        ]
      }
    ],
    col: { md: 4, sm: 6, xs: 12 },
    validationType: "string",
    validations: [
      {
        type: "required",
        params: ["this field is required"]
      }
      // {
      //   type: "min",
      //   params: [1, "name cannot be less than 5 characters"]
      // },
      // {
      //   type: "max",
      //   params: [2, "name cannot be more than 10 characters"]
      // }
    ]
  }
  // {
  //   type: "select",
  //   label: "7777777777777",
  //   id: "selectName2",
  //   options: ["test", "test2"],
  //   col: { md: 4, sm: 6, xs: 12 }
  //   // validations: [
  //   //   {
  //   //     type: "required",
  //   //     params: ["this field is required"]
  //   //   },
  //   //   {
  //   //     type: "min",
  //   //     params: [1, "name cannot be less than 5 characters"]
  //   //   },
  //   //   {
  //   //     type: "max",
  //   //     params: [2, "name cannot be more than 10 characters"]
  //   //   }
  //   // ]
  // }
];
function PageForm() {
  return (
    <Stack justifyContent="center" sx={{ height: "100vh", width: "100%", alignItems: "center", px: 10 }}>
      <Grid2 container spacing={4} sx={{ width: "100%" }}>
        <FormBuilder fields={muckFields} />
      </Grid2>
    </Stack>
  );
}

export default PageForm;
