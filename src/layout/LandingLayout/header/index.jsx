import CustomMenu from "components/ui-component/extended/menu";
import LANDING from "constant/landing";
import Logo from "layout/components/logo";

import { Box } from "@mui/system";

import { useTheme } from "@emotion/react";

import LandingActions from "../Actions";

function HeaderLanding() {
  const theme = useTheme();

  return (
    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", py: 2, px: 3 }}>
      <Logo />
      <CustomMenu data={LANDING.LIST_MENU} />
      <LandingActions />
    </Box>
  );
}

export default HeaderLanding;
