import { Box } from "@mui/system";

import { useTheme } from "@emotion/react";

import Logo from "layout/components/logo";

import CustomMenu from "components/ui-component/extended/menu";
import LANDING from "constant/landing";

import LandingActions from "../Actions";

function HeaderLanding() {
  return (
    <Box sx={{ display: "flex", bgcolor: "background.default", justifyContent: "space-between", alignItems: "center", py: 2, px: 3 }}>
      <Logo />
      <CustomMenu data={LANDING.LIST_MENU} />
      <LandingActions />
    </Box>
  );
}

export default HeaderLanding;
