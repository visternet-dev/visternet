import LandingFilter from "components/pages/landing/filter";
import LandingMinimalRows from "components/pages/landing/rows/MinimalRows";
import MUK_LANDING from "constant/landing/muk";
import Layout from "layout";

import { Container, Stack } from "@mui/material";

// =============================|| LANDING MAIN ||============================= //

const Landing = () => (
  <Stack>
    {/* TODO: this style is temporary */}
    <Container sx={{ height: "100vh" }}>
      <LandingMinimalRows data={MUK_LANDING.STATISTICS} prefix="+" haveTranslate />
      <LandingFilter />
    </Container>
  </Stack>
);

Landing.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Landing;
