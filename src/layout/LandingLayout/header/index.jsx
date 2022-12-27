import { useTheme } from "@emotion/react";
import { Box } from "@mui/system";
import Logo from "layout/components/logo";
import MenuDesktop from "layout/components/menu/descktop";

import LandingActions from "../Actions";

function HeaderLanding() {
  const theme = useTheme();

  console.log("theme:", theme);

  return (
    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", bgcolor: "red" }}>
      <Logo />
      <MenuDesktop />
      <LandingActions />
    </Box>
  );
}

export default HeaderLanding;
