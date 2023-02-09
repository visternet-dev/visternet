import React from "react";

import { Stack } from "@mui/material";
import { Box } from "@mui/system";

import Layout from "layout";

function PlansPage() {
  return (
    <Stack sx={{ width: "100%", maxWidth: "100%" }}>
      <Box sx={{ width: "100%", maxWidth: "100%" }}>
        <img src="/assets/images/plans/header-plans.png" style={{ width: "100%" }} />
      </Box>
    </Stack>
  );
}

PlansPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default PlansPage;
