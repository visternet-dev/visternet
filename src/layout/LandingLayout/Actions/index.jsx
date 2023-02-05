import { useRouter } from "next/router";

import { Stack } from "@mui/material";

import translate from "utils/locales/translate";

import CustomButton from "components/ui-component/custom/Button";

function LandingActions() {
  const router = useRouter();
  return (
    <Stack direction="row" spacing={1}>
      <CustomButton onClick={() => router.push("/login")} variant="contained">
        {translate("login")}
      </CustomButton>
      <CustomButton onClick={() => router.push("/register")} variant="contained">
        {translate("register")}
      </CustomButton>
    </Stack>
  );
}

export default LandingActions;
