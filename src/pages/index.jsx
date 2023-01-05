import { Stack } from "@mui/material";

import Layout from "layout";

import LandingGetStarted from "components/pages/landing/sections/get-start";
import LandingHeader from "components/pages/landing/sections/header";

// =============================|| LANDING MAIN ||============================= //

const Landing = () => (
  <Stack>
    <LandingHeader />
    <LandingGetStarted />
  </Stack>
);

Landing.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Landing;
