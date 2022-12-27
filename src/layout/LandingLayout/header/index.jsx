import { useTheme } from "@emotion/react";
import { Box } from "@mui/system";
import MenuDesktop from "components/ui-component/extended/menu/descktop";
import Logo from "layout/components/logo";

import LandingActions from "../Actions";

const dataMenuList = [
  { title: "Home", url: "/", isActive: true },
  { title: "Find a consultant", url: "/?" },
  { title: "Blog", url: "blog" },
  { title: "About Us", url: "about" },
  { title: "Concat Us", url: "concat" }
];

function HeaderLanding() {
  const theme = useTheme();

  console.log("theme:", theme);

  return (
    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", py: 2, px: 3 }}>
      <Logo />
      <MenuDesktop data={dataMenuList} />
      <LandingActions />
    </Box>
  );
}

export default HeaderLanding;
