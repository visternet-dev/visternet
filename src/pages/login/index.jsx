import { Box, Grid, InputBase, styled, Typography } from "@mui/material";

import Layout from "layout";

import CustomButton from "components/ui-component/HOC/Button";
import LAYOUT from "constant";

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(1)
  },
  "& .MuiInputBase-input": {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.mode === "light" ? "#fcfcfb" : "#2b2b2b",
    border: "1px solid #ced4da",
    fontSize: 16,
    width: "auto",
    padding: "10px 12px",
    width: "100%",
    transition: theme.transitions.create(["border-color", "background-color", "box-shadow"])
  }
}));
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
        <img className="plane" src="/assets/images/pages/loginPlane.svg" alt="Plane" />
        <img className="map" src="/assets/images/pages/loginMap.svg" alt="Map" />
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
          <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem", width: "100%" }}>
            <Box sx={{ display: "flex", flexDirection: "column", label: { fontWeight: "bold", fontSize: "0.875rem" } }}>
              <label>Email</label>
              <BootstrapInput type="text" placeholder="Enter your email" />
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", label: { fontWeight: "bold", fontSize: "0.875rem" } }}>
              <label>Password</label>
              <BootstrapInput type="password" placeholder="••••••••" />
            </Box>
          </Box>
          <CustomButton sx={{ flex: 1, width: "100%", marginTop: "4rem", padding: "10px 18px" }} variant="contained">
            Search
          </CustomButton>
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
