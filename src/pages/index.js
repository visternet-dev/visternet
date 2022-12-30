import LandingMinimalRows from "components/pages/landing/rows/MinimalRows";
import MUK_LANDING from "constant/landing/muk";
import Layout from "layout";

import { Stack } from "@mui/material";

// =============================|| LANDING MAIN ||============================= //

const Landing = () => (
  <Stack>
    <LandingMinimalRows data={MUK_LANDING.STATISTICS} prefix="+" />
  </Stack>
);

Landing.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Landing;
