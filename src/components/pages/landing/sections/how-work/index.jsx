import { Stack } from "@mui/material";

import translate from "utils/locales/translate";

import ComingSoon from "components/ui-component/coming-soon";

import LandingTitle from "../../title";

const bgHowWork = "/assets/images/landing/bgHowWork.svg";

function LandingSectionHowWork() {
  return (
    <Stack alignItems="center" justifyContent="center">
      <LandingTitle subTitle={translate("working-progress")} center sx={{ mb: 3 }}>
        {translate("how-it-work-for-applicants")}
      </LandingTitle>

      {/* <img src={bgHowWork} style={{ width: "100%" }} /> */}
    </Stack>
  );
}

export default LandingSectionHowWork;
