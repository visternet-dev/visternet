import { Grid, Stack } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

import Layout from "layout";

import LandingSectionGetStarted from "components/pages/landing/sections/get-start";
import LandingSectionHeader from "components/pages/landing/sections/header";
import LandingSectionHowWork from "components/pages/landing/sections/how-work";
import LandingSectionImmigration from "components/pages/landing/sections/immigration";
import LandingSectionSlider from "components/pages/landing/sections/slider";
import LandingSectionUpdateVisas from "components/pages/landing/sections/update-visas";
import LandingSectionUserExperience from "components/pages/landing/sections/user-experience";

import { immigration, sectionSlider, sectionUserExperience } from "mock/landing";

// =============================|| LANDING MAIN ||============================= //

const Landing = ({ sectionUserExperience, sectionSlider, immigration }) => (
  <Stack>
    <LandingSectionHeader />
    <LandingSectionGetStarted />
    <LandingSectionHowWork />
    <Grid2 container sx={{ px: 5, maxWidth: "100%" }} spacing={10}>
      <Grid2 xs={12} md={6}>
        <LandingSectionUpdateVisas />
      </Grid2>
      <Grid2 xs={12} md={6}>
        <LandingSectionImmigration data={immigration} />
      </Grid2>
    </Grid2>
    <LandingSectionSlider data={sectionSlider} />
    <LandingSectionUserExperience data={sectionUserExperience} />
  </Stack>
);

Landing.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export async function getStaticProps() {
  return {
    props: {
      sectionUserExperience,
      sectionSlider,
      immigration
    }
  };
}

export default Landing;
