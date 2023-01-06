import { Grid, Stack } from "@mui/material";

import Layout from "layout";

import LandingSectionGetStarted from "components/pages/landing/sections/get-start";
import LandingSectionHeader from "components/pages/landing/sections/header";
import LandingSectionHowWork from "components/pages/landing/sections/how-work";
import LandingSectionImmigration from "components/pages/landing/sections/immigration";
import LandingSectionSlider from "components/pages/landing/sections/slider";
import LandingSectionUpdateVisas from "components/pages/landing/sections/update-visas";
import LandingSectionUserExperience from "components/pages/landing/sections/user-experience";

// =============================|| LANDING MAIN ||============================= //

const Landing = () => (
  <Stack>
    <LandingSectionHeader />
    <LandingSectionGetStarted />
    <LandingSectionHowWork />
    <Grid container>
      <Grid item xs={12} md={6}>
        <LandingSectionUpdateVisas />
      </Grid>
      <Grid item xs={12} md={6}>
        <LandingSectionImmigration />
      </Grid>
    </Grid>
    <LandingSectionSlider />
    <LandingSectionUserExperience />
  </Stack>
);

Landing.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Landing;
