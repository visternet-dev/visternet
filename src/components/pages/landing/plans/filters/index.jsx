import { Stack, Typography } from "@mui/material";

import { useTheme } from "@emotion/react";

import FormBuilder from "components/ui-component/form";

const muckFormVuilder = {
  sections: [
    {
      type: "accordion",
      title: "Eligibility",
      defaultExpanded: true,
      actions: [
        {
          type: "submit",
          title: "Submit Filter",
          fullWidth: true,
          sx: { width: "100%" },
          size: "large",
          variant: "outlined"
        },
        {
          type: "reset",
          title: "Reset Filter",
          variant: false,
          fullWidth: true,
          sx: { width: "100%" }
        }
      ],
      action2: {
        submit: {
          type: "submit",
          title: "Submit Filter",
          fullWidth: true,
          sx: { width: "100%" },
          size: "large",
          variant: "outlined"
        },
        cancel: {},
        reset: {
          type: "reset",
          title: "Reset Filter",
          variant: false,
          fullWidth: true,
          sx: { width: "100%" }
        },
        nextStep: {},
        beforeStep: {}
      },
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
        }
      ]
    },

    {
      type: "accordion",
      title: "School Filters"
    },
    {
      type: "accordion",
      title: "Program Filters"
    }
  ],
  api: "api/test",
  defaultBody: {},
  method: "post"
};

function PlansFilters({ sx, ...params }) {
  const theme = useTheme();

  return (
    <Stack sx={{ ...sx, bgcolor: theme.palette.background.paper, height: "100%", padding: "24px 16px 24px 16px", position: "relative" }} {...params}>
      <Typography variant="h3">Filters</Typography>

      <Stack>
        <FormBuilder data={muckFormVuilder} />
      </Stack>
    </Stack>
  );
}

export default PlansFilters;
