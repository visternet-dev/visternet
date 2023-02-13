import React from "react";

import { Box, Grid, Stack } from "@mui/material";

import Layout from "layout";

import CardPlan from "components/pages/plans/cards/cardPlan";

function PlansPage() {
  return (
    <>
      <Stack sx={{ width: "100%", maxWidth: "100%" }}>
        <Box sx={{ width: "100%", maxWidth: "100%" }}>
          <img src="/assets/images/plans/header-plans.png" style={{ width: "100%" }} />
        </Box>
      </Stack>
      <Grid mt={8} container>
        <Grid
          padding={0.594}
          width="100%"
          md={4}
          sm={12}
          sx={{ boxShadow: "0px 4px 8px -2px rgba(16, 24, 40, 0.1), 0px 2px 4px -2px rgba(16, 24, 40, 0.06)", border: "1px solid #EAECF0" }}
          item
        >
          test
        </Grid>
        <Grid width="100%" px={0.594} sm={12} md={8} item>
          <CardPlan />
          <CardPlan />
          <CardPlan />
          <CardPlan />
          <CardPlan />
        </Grid>
      </Grid>
    </>
  );
}

PlansPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default PlansPage;
