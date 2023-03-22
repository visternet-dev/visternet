import { Box, Grid, Typography } from "@mui/material";

import Layout from "layout";

import StepBuilder from "components/ui-component/builder/step";
import LAYOUT from "constant";

const mock = {
  steps: [
    {
      parent: {
        type: "grid",
        rowSpacing: 2,
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
              col: { xs: 12 }
            },
            {
              id: "password",
              type: "password",
              label: "Password",
              col: { xs: 12 }
            }
          ]
        }
      ],
      actions: {
        submit: {
          title: "Login",
          sx: { width: "100%" },
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

function Login() {
  return (
    <Grid sx={{ height: "100vh" }} container>
      <Grid
        sx={{
          position: "relative",
          overflow: "hidden",
          ".plane": { position: "absolute", right: "-8rem", top: "10%", zIndex: "0" },
          ".map": { position: "absolute", bottom: 0, left: "50%", transform: "translateX(-50%)" }
        }}
        display="flex"
        alignItems="center"
        justifyContent="center"
        xs={12}
        md={6}
        item
      >
        <img className="plane" src="/assets/images/landing/loginAirPlane.svg" alt="Plane" />
        <img className="map" src="/assets/images/landing/worldMapAuth.svg" alt="Map" />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            minWidth: "22.5rem",
            zIndex: "1"
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem", width: "100%", mb: 4 }}>
            <Typography sx={{ fontSize: "2rem", fontWeight: "bold" }} variant="p">
              Welcome back
            </Typography>
            <Typography variant="p">Welcome back! Please enter your details.</Typography>
          </Box>
          {/* Handle Form */}
          <StepBuilder data={mock} />
        </Box>
      </Grid>
      <Grid
        sx={{ position: "relative", ".section-right-bg": { position: "absolute", width: "100%", height: "100%", objectFit: "cover" } }}
        xs={6}
        display={{ xs: "none", lg: "block" }}
        item
      >
        <img className="section-right-bg" src="/assets/images/e-commerce/prod-2.jpg" />
      </Grid>
    </Grid>
  );
}

Login.getLayout = function getLayout(page) {
  return <Layout variant={LAYOUT.MINIMAL}>{page}</Layout>;
};

export default Login;
