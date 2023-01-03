import CustomButton from "components/ui-component/HOC/Button";
import translate from "utils/locales/translate";

import { Stack } from "@mui/material";

function LandingActions() {
  return (
    <Stack direction="row" spacing={1}>
      <CustomButton variant="contained">{translate("login")}</CustomButton>
      <CustomButton variant="contained">{translate("register")}</CustomButton>
    </Stack>
  );
}

export default LandingActions;
