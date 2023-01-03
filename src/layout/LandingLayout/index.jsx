import { Stack } from "@mui/material";
import { Box } from "@mui/system";

import FooterLanding from "./footer";
import HeaderLanding from "./header";

function LandingLayout({ children }) {
  return (
    <Stack>
      <HeaderLanding />
      {children}
      {/* TODO: for test ui */}
      <Box sx={{ height: "20vh" }} />
      <FooterLanding />
    </Stack>
  );
}

export default LandingLayout;
