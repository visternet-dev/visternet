import React from "react";

import { Stack } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { Box } from "@mui/system";

import Layout from "layout";

import PlansFilters from "components/pages/landing/plans/filters";
import PlansSection from "components/pages/landing/plans/section";

function PlansPage() {
  return (
    // TODO: chnae bgcolor
    <Stack sx={{ width: "100%", maxWidth: "100%", bgcolor: "#EBEBEB" }}>
      <Box sx={{ width: "100%", maxWidth: "100%", mb: 4 }}>
        <img src="/assets/images/plans/header-plans.png" style={{ width: "100%" }} />
      </Box>

      <Grid2 container sx={{ px: 2, maxWidth: "100%" }} spacing={{ xs: 0, md: 2 }}>
        <Grid2 xs={12} md={4}>
          <PlansFilters />
        </Grid2>

        <Grid2 xs={12} md={8}>
          <PlansSection />
        </Grid2>
      </Grid2>
    </Stack>
  );
}

PlansPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default PlansPage;
