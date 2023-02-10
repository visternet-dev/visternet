import { Stack, Typography } from "@mui/material";

import { useTheme } from "@emotion/react";

import FormBuilder from "components/ui-component/form";

const muckFormVuilder = [
  {
    parent: {
      type: "accordion",
      title: "Eligibility",
      defaultExpanded: true
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
      submit: {
        type: "submit",
        title: "Submit Filter",
        sx: { width: "100%" },
        size: "large",
        variant: "outlined",
        api: null
      },
      reset: {
        title: "Reset Filter",
        variant: false,
        fullWidth: true,
        sx: { width: "100%" }
      },

      nextStep: {
        title: "Next Step",
        variant: false,
        fullWidth: true,
        sx: { width: "100%" }
      }
    }
  },
  {
    parent: {
      type: "accordion",
      title: "School Filters"
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
          }
        ],
        actions: {
          submit: {
            type: "submit",
            title: "Submit Filter",
            sx: { width: "100%" },
            size: "large",
            variant: "outlined",
            api: null
          },
          reset: {
            type: "reset",
            title: "Reset Filter",
            variant: false,
            fullWidth: true,
            sx: { width: "100%" }
          }
        }
      }
    ],
    actions: {
      submit: {
        type: "submit",
        title: "Submit Filter",
        sx: { width: "100%" },
        size: "large",
        variant: "outlined",
        api: null
      },
      reset: {
        type: "reset",
        title: "Reset Filter",
        variant: false,
        fullWidth: true,
        sx: { width: "100%" }
      }
    }
  },
  {
    parent: {
      type: "accordion",
      title: "Program Filters"
    }
  }
];

function PlansFilters({ sx, ...params }) {
  const theme = useTheme();

  return (
    <Stack
      sx={{ ...sx, bgcolor: theme.palette.background.paper, height: "95vh", padding: "24px 16px 24px 16px", position: "sticky", top: 8, overflow: "auto" }}
      {...params}
    >
      <Stack sx={{ mb: 2 }} spacing={1}>
        <Typography variant="h3">Filters</Typography>
        <Typography variant="body1">Apply Filters to Table Data.</Typography>
      </Stack>

      <Stack>
        {muckFormVuilder?.map((item) => (
          <FormBuilder
            data={item}
            callToActions={{
              onNextStep: (data) => {
                console.log("test", data);
              }
            }}
          />
        ))}
      </Stack>
    </Stack>
  );
}

export default PlansFilters;
