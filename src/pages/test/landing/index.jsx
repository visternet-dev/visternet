import LandingTitle from "components/pages/landing/title";
import Layout from "layout";
import translate from "utils/locales/translate";

import { Container, Stack, Typography } from "@mui/material";

// =============================|| LANDING MAIN ||============================= //

const Landing = () => (
  <Stack spacing={4} alignItems="center">
    <Typography variant="h1">Landing Title</Typography>

    <LandingTitle subTitle={translate("sub-title")} center>
      {translate("title")}
    </LandingTitle>

    <LandingTitle subTitle={translate("sub-title")}>{translate("title")}</LandingTitle>

    <LandingTitle>{translate("title")}</LandingTitle>

    <LandingTitle leftLine={false}>{translate("title")}</LandingTitle>
    <LandingTitle rightLine={false}>{translate("title")}</LandingTitle>
  </Stack>
);

Landing.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Landing;
