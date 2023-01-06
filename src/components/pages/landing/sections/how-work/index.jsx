import { Stack } from "@mui/material";

import translate from "utils/locales/translate";

import ComingSoon from "components/ui-component/coming-soon";

import LandingTitle from "../../title";

function LandingSectionHowWork() {
  return (
    <Stack alignItems="center">
      <LandingTitle subTitle={translate("working-progress")} center sx={{ mb: 3 }}>
        {translate("how-it-work-for-applicants")}
      </LandingTitle>

      {/* TODO: must be develop this section */}
      <ComingSoon />
    </Stack>
  );
}

export default LandingSectionHowWork;
