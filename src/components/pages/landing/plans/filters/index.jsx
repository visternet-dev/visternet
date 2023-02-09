import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Accordion, AccordionDetails, AccordionSummary, Stack, Typography } from "@mui/material";

import { useTheme } from "@emotion/react";

import FormBuilder from "components/ui-component/form";

const muckFormVuilder = {
  sections: [
    {
      type: "accordion",
      title: "Eligibility",
      defaultExpanded: true,
      fields: [
        {
          id: "id-multi",
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
  //   actions: [
  //     mockAction(),
  //     mockAction({ type: "reset", title: "Reset" }),
  //     mockAction({ type: "next-step", title: " < Next Step" }),
  //     mockAction({ type: "prev-step", title: "Prev Step >" })
  //   ],
  api: "api/test",
  defaultBody: {},
  method: "post"
};

function PlansFilters({ sx, ...params }) {
  const theme = useTheme();

  return (
    <Stack sx={{ ...sx, bgcolor: theme.palette.background.paper, height: "100%", padding: "24px 16px 24px 16px" }} {...params}>
      <Typography variant="h3">Filters</Typography>

      <Stack>
        <FormBuilder data={muckFormVuilder} />
      </Stack>
    </Stack>
  );
}

export default PlansFilters;
