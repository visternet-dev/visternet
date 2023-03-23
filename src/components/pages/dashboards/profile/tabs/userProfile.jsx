import { Avatar, Box, Grid, styled, Typography } from "@mui/material";
import { orange } from "@mui/material/colors";

import StepBuilder from "components/ui-component/builder/step";
import CustomButton from "components/ui-component/custom/Button";

const ColorButton = styled(CustomButton)(({ theme }) => ({
  color: theme.palette.getContrastText(orange[500])
}));

const mock = {
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
              id: "email",
              type: "text",
              label: "Email",
              col: { xs: 6 }
            },
            {
              id: "password",
              type: "password",
              label: "Password",
              col: { xs: 6 }
            }
          ]
        }
      ],
      actions: {
        submit: {
          title: "Update",
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

export function UserProfile() {
  console.log("userProfile");
  return (
    <Grid container>
      <Grid xs={12} md={8} item>
        <Box display="flex">
          <Avatar sx={{ width: 60, height: 60 }} alt="Remy Sharp" src="/assets/images/profile/img-user.png" />
          <Box ml={2} display="flex" justifyContent="center" flexDirection="column">
            <Typography variant="h3">Ali Ebrahimi Kashef</Typography>
            <Typography variant="caption">Last Update : 20.10.2023</Typography>
          </Box>
        </Box>
      </Grid>
      <Grid display="flex" flexDirection="column" justifyContent="end" alignItems="end" md={4} xs={12} sx={{ mb: 2 }} item>
        <ColorButton sx={{ border: "1px solid #EF6820", color: "#EF6820" }} size="small">
          <img src="" />
          Upload Profile
        </ColorButton>
        <Box mt={1}>
          <img src="" />
          <Typography variant="caption">Image size Limit should be 125kb Max.</Typography>
        </Box>
      </Grid>
      {/* Handle Form */}
      <StepBuilder data={mock} />
    </Grid>
  );
}
