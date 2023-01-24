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
        value: "test1",
        fields: [
          {
            id: "selectName2343434",
            type: "select",
            label: "999999999",
            placeholder: "test22222",
            defaultValue: "test192",
            options: [
              {
                label: "options 2",
                value: "test192",
                fields: [
                  {
                    id: "33333334",
                    type: "select",
                    label: "333333333",
                    placeholder: "3333333",
                    options: [{ label: "options 3221", value: "option 232", fields: [] }],
                    col: { md: 4, sm: 6, xs: 12 },
                    validationType: "string",
                    validations: [
                      {
                        type: "required",
                        params: ["this field is required"]
                      }
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
  },
  {
    type: "checkbox",
    label: "7777777777777",
    id: "selectName232",
    options: [
      {
        value: true,
        fields: [
          {
            id: "55555",
            type: "select",
            label: "55555",
            placeholder: "55",
            options: [{ label: "options 555", value: "option 555", fields: [] }],
            col: { xs: 12 },
            validationType: "string",
            validations: [
              {
                type: "required",
                params: ["this field is required"]
              }
            ]
          }
        ]
      },
      { value: false, fields: [] }
    ],
    col: { xs: 12 }
    // validations: [
    //   {
    //     type: "required",
    //     params: ["this field is required"]
    //   },
    //   {
    //     type: "min",
    //     params: [1, "name cannot be less than 5 characters"]
    //   },
    //   {
    //     type: "max",
    //     params: [2, "name cannot be more than 10 characters"]
    //   }
    // ]
  }
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
