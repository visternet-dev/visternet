import { Stack } from "@mui/material";

import translate from "utils/locales/translate";

import ComingSoon from "components/ui-component/coming-soon";

import LandingTitle from "../../title";

function LandingSectionImmigration() {
  return (
    <Stack alignItems="flex-start">
      <LandingTitle subTitle={translate("category")} rightLine={false} sx={{ mb: 3 }}>
        {translate("immigration-opportunities")}
      </LandingTitle>

      {/* TODO: must be develop this section */}
      <ComingSoon />
    </Stack>
  );
}

export default LandingSectionImmigration;
