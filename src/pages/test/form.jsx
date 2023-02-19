import React from "react";

import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { Stack } from "@mui/system";

import FormBuilder from "components/ui-component/builder/form";
import StepBuilder from "components/ui-component/builder/step";

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

const mock = {
  steps: [
    {
      // parent: {
      //   type: "accordion",
      //   title: "Eligibility",
      //   defaultExpanded: true
      // },
      sections: [
        {
          type: "none",
          title: "",
          fields: [
            // Do you have a valid Study Permit / Visa?
            {
              id: "id-valid-Study",
              type: "multi-select",
              label: "Do you have a valid Study Permit / Visa?",
              placeholder: "place holder",
              col: { xs: 12 },
              validationType: "array",
              options: [
                {
                  label: "Lable 1",
                  value: "ID 1",
                  fields: []
                },
                {
                  label: "Lable 2",
                  value: "ID 2",
                  fields: []
                },
                {
                  label: "Lable 3",
                  value: "ID 3",
                  fields: []
                }
              ]
            },
            // Nationality
            {
              id: "id-Nationality",
              type: "select",
              label: "Nationality",
              placeholder: "place holder",
              col: { xs: 12 },
              validationType: "string",
              options: [
                {
                  label: "Lable 1",
                  value: "ID 1",
                  fields: []
                },
                {
                  label: "Lable 2",
                  value: "ID 2",
                  fields: []
                },
                {
                  label: "Lable 3",
                  value: "ID 3",
                  fields: []
                }
              ]
            },
            // Education Country
            {
              id: "id-Education-Country",
              type: "select",
              label: "Education Country",
              placeholder: "place holder",
              col: { xs: 12 },
              validationType: "string",
              options: [
                {
                  label: "Lable 1",
                  value: "ID 1",
                  fields: []
                },
                {
                  label: "Lable 2",
                  value: "ID 2",
                  fields: []
                },
                {
                  label: "Lable 3",
                  value: "ID 3",
                  fields: []
                }
              ]
            },
            // Education Level
            {
              id: "id-Education-Level",
              type: "select",
              label: "Education Level",
              placeholder: "place holder",
              col: { xs: 12 },
              validationType: "string",
              options: [
                {
                  label: "Lable 1",
                  value: "ID 1",
                  fields: []
                },
                {
                  label: "Lable 2",
                  value: "ID 2",
                  fields: []
                },
                {
                  label: "Lable 3",
                  value: "ID 3",
                  fields: []
                }
              ]
            },
            // Grading Scheme
            {
              id: "id-Grading-Scheme",
              type: "select",
              label: "Grading Scheme",
              placeholder: "place holder",
              col: { xs: 12 },
              validationType: "string",
              options: [
                {
                  label: "Lable 1",
                  value: "ID 1",
                  fields: []
                },
                {
                  label: "Lable 2",
                  value: "ID 2",
                  fields: []
                },
                {
                  label: "Lable 3",
                  value: "ID 3",
                  fields: []
                }
              ]
            },
            // English-Exam-Type
            {
              id: "id-English-Exam-Type",
              type: "select",
              label: "English Exam Type",
              placeholder: "place holder",
              col: { xs: 12 },
              validationType: "string",
              options: [
                {
                  label: "Lable 1",
                  value: "ID 1",
                  fields: []
                },
                {
                  label: "Lable 2",
                  value: "ID 2",
                  fields: []
                },
                {
                  label: "Lable 3",
                  value: "ID 3",
                  fields: []
                }
              ]
            },
            // Only Show Direct Admissions
            {
              id: "id-Only Show Direct Admissions",
              type: "checkbox",
              col: { xs: 12 },
              options: [
                {
                  label: "Only Show Direct Admissions",
                  value: "ID 1",
                  fields: []
                }
              ]
            },

            {
              id: "id-Only23",
              type: "radio",
              col: { xs: 12 },
              options: [
                {
                  label: "Only1 s",
                  value: "ID 1",
                  fields: []
                },
                {
                  label: "Only2 s",
                  value: "ID 2",
                  fields: []
                }
              ]
            },
            {
              label: "Toggle",
              id: "id-toggle",
              type: "toggle",
              defaultValue: true,

              col: { xs: 12 },
              options: [
                {
                  value: true,
                  fields: [


                    {
                      label: "Toggle sub",
                      id: "id-toggle sub",
                      type: "toggle",
                      defaultValue: true,
        
                      col: { xs: 12 },
                      options: [
                        {
                          value: true,
                          fields: []
                        }
                      ]
                    }


                  ]
                }
              ]
            }
          ]
        },
        // Only Show Direct Admissions
        {
          id: "id-Only Show Direct Admissions",
          type: "checkbox",
          label: null,
          option: {
            label: "Only Show Direct Admissions",
            value: true
          }
        }
      ],

      actions: {
        submit: {
          title: "submit",
          api: {
            method: "post",
            url: "api/test",
            body: {},
            params: {}
          }
        },
        nextStep: {
          title: "Next Step",
          fullWidth: true,
          sx: { width: "100%" }
        }
      }
    },

    // -----------------------------
    {
      parent: {
        type: "card",
        title: "Test Step 2"
      },
      sections: [
        {
          type: "none",
          title: "",
          fields: [
            // Do you have a valid Study Permit / Visa?
            {
              id: "id-valid-Study",
              type: "multi-select",
              label: "Do you have a valid Study Permit / Visa?",
              placeholder: "place holder",
              col: { xs: 12 },
              validationType: "array",
              options: [
                {
                  label: "Lable 1",
                  value: "ID 1",
                  fields: []
                },
                {
                  label: "Lable 2",
                  value: "ID 2",
                  fields: []
                },
                {
                  label: "Lable 3",
                  value: "ID 3",
                  fields: []
                }
              ]
            },
            // Nationality
            {
              id: "id-Nationality",
              type: "select",
              label: "Nationality",
              placeholder: "place holder",
              col: { xs: 12 },
              validationType: "string",
              options: [
                {
                  label: "Lable 1",
                  value: "ID 1",
                  fields: []
                },
                {
                  label: "Lable 2",
                  value: "ID 2",
                  fields: []
                },
                {
                  label: "Lable 3",
                  value: "ID 3",
                  fields: []
                }
              ]
            },
            // Education Country
            {
              id: "id-Education-Country",
              type: "select",
              label: "Education Country",
              placeholder: "place holder",
              col: { xs: 12 },
              validationType: "string",
              options: [
                {
                  label: "Lable 1",
                  value: "ID 1",
                  fields: []
                },
                {
                  label: "Lable 2",
                  value: "ID 2",
                  fields: []
                },
                {
                  label: "Lable 3",
                  value: "ID 3",
                  fields: []
                }
              ]
            },
            // Education Level
            {
              id: "id-Education-Level",
              type: "select",
              label: "Education Level",
              placeholder: "place holder",
              col: { xs: 12 },
              validationType: "string",
              options: [
                {
                  label: "Lable 1",
                  value: "ID 1",
                  fields: []
                },
                {
                  label: "Lable 2",
                  value: "ID 2",
                  fields: []
                },
                {
                  label: "Lable 3",
                  value: "ID 3",
                  fields: []
                }
              ]
            },
            // Grading Scheme
            {
              id: "id-Grading-Scheme",
              type: "select",
              label: "Grading Scheme",
              placeholder: "place holder",
              col: { xs: 12 },
              validationType: "string",
              options: [
                {
                  label: "Lable 1",
                  value: "ID 1",
                  fields: []
                },
                {
                  label: "Lable 2",
                  value: "ID 2",
                  fields: []
                },
                {
                  label: "Lable 3",
                  value: "ID 3",
                  fields: []
                }
              ]
            },
            // English-Exam-Type
            {
              id: "id-English-Exam-Type",
              type: "select",
              label: "English Exam Type",
              placeholder: "place holder",
              col: { xs: 12 },
              validationType: "string",
              options: [
                {
                  label: "Lable 1",
                  value: "ID 1",
                  fields: []
                },
                {
                  label: "Lable 2",
                  value: "ID 2",
                  fields: []
                },
                {
                  label: "Lable 3",
                  value: "ID 3",
                  fields: []
                }
              ]
            },
            // Only Show Direct Admissions
            {
              id: "id-Only Show Direct Admissions",
              type: "checkbox",
              col: { xs: 12 },
              options: [
                {
                  label: "Only Show Direct Admissions",
                  value: "ID 1",
                  fields: []
                }
              ]
            }
          ]
        },
        // Only Show Direct Admissions
        {
          id: "id-Only Show Direct Admissions",
          type: "checkbox",
          label: null,
          option: {
            label: "Only Show Direct Admissions",
            value: true
          }
        }
      ],

      actions: {
        // submit: {
        //   type: "submit",
        //   title: "Submit Filter",
        //   sx: { width: "100%" },
        //   size: "large",
        //   api: null
        // },
        // reset: {
        //   title: "Reset Filter",
        //   fullWidth: true,
        //   sx: { width: "100%" }
        // },

        prevStep: {
          title: "Prev Step",
          fullWidth: true,
          sx: { width: "100%" }
        },

        submit: {
          type: "submit",
          title: "Submit Filter",
          sx: { width: "100%" },
          size: "large",
          api: null
        }
      }
    }
  ]
};

function PageForm() {
  return (
    <Stack justifyContent="center" sx={{ height: "100vh", width: "100%", alignItems: "center", px: 10 }}>
      <Grid2 container spacing={4} sx={{ width: "100%" }}>
        <StepBuilder data={mock} />
      </Grid2>
    </Stack>
  );
}

export default PageForm;
