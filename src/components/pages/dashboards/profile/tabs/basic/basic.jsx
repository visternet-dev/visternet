import { Box } from "@mui/material";

import StepBuilder from "components/ui-component/builder/step";

const mockData = {
  steps: [
    {
      parent: {
        type: "grid",
        rowSpacing: 2,
        columnSpacing: 2,
        xs: 12
      },
      sections: [
        {
          type: "none",
          fields: [
            {
              id: "test-id",
              type: "text",
              label: "text",
              col: {
                xs: 6
              }
            }
          ]
        }
      ],
      actions: {
        submit: {
          title: "close",
          size: "large",
          api: {
            method: "post",
            url: "api/test",
            body: {},
            params: {}
          }
        },
        close: {
          title: "close",
          size: "large",
          api: {
            method: "post",
            url: "api/test",
            body: {},
            params: {}
          }
        }
      }
    }
  ]
};

const Basic = ({ setActiveStep }) => (
  <Box sx={{ width: "100%" }}>
    <StepBuilder data={mockData} calltoactions={{ onSubmit: () => setActiveStep(0) }} />
  </Box>
);

export default Basic;
