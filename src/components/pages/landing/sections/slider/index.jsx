import { Stack } from "@mui/material";

import translate from "utils/locales/translate";

import ComingSoon from "components/ui-component/coming-soon";

import LandingTitle from "../../title";

function LandingSectionSlider() {
  return (
    <Stack alignItems="center">
      <LandingTitle subTitleBottom={translate("show-read-more")} center sx={{ mb: 3 }} leftLine={false} rightLine={false}>
        {translate("a-platform-to-empower-all-stakeholders-in-immigration-ecosystem")}
      </LandingTitle>

      {/* TODO: must be develop this section */}
      <ComingSoon />
    </Stack>
  );
}

export default LandingSectionSlider;
