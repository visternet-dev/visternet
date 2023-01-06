import { Stack, Typography } from "@mui/material";

import translate from "utils/locales/translate";

import ComingSoon from "components/ui-component/coming-soon";

import LandingTitle from "../../title";

function LandingSectionUserExperience() {
  return (
    <Stack alignItems="center">
      <LandingTitle center sx={{ mb: 3 }} leftLine={false} rightLine={false}>
        {translate("what-our-users-experience")}
      </LandingTitle>
      <Typography>{translate("lorem")}</Typography>

      {/* TODO: must be develop this section */}
      <ComingSoon />
    </Stack>
  );
}

export default LandingSectionUserExperience;
