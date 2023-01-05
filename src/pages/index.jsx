import { Stack } from "@mui/material";

import Layout from "layout";

import LandingGetStarted from "components/pages/landing/sections/get-start";
import LandingHowWork from "components/pages/landing/sections/how-work";
import LandingHeader from "components/pages/landing/sections/header";

// =============================|| LANDING MAIN ||============================= //

const Landing = () => (
  <Stack >
    <LandingHeader />
    <LandingGetStarted />
    <LandingHowWork />
  </Stack>
);

Landing.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Landing;
