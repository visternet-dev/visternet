import CustomDivider from "components/ui-component/HOC/Divider";
import translate from "utils/locales/translate";

import { Divider, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";

import LandingTitle from "../title";

function LandingGetStarted() {
  return (
    <Stack alignItems="center">
      <LandingTitle subTitle={translate("working-progress")} center sx={{ mb: 3 }}>
        {translate("get-started-width-visternet")}
      </LandingTitle>

      <CustomDivider>
        <Stack direction="row" spacing={4} sx={{px:4}}>
          <Typography>{translate("applicants")}</Typography>
          <Typography>{translate("partners")}</Typography>
        </Stack>
      </CustomDivider>
    </Stack>
  );
}

export default LandingGetStarted;
