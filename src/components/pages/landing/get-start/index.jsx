import translate from "utils/locales/translate";

import { Stack } from "@mui/material";

import LandingTitle from "../title";

function LandingGetStarted() {
  return (
    <Stack alignItems="center">
      <LandingTitle subTitle={translate("working-progress")} center>
        {translate("get-started-width-visternet")}
      </LandingTitle>
    </Stack>
  );
}

export default LandingGetStarted;
