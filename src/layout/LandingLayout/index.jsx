import { useRouter } from "next/router";

import { Stack } from "@mui/material";
import { Box } from "@mui/system";

import FooterLanding from "./footer";
import HeaderLanding from "./header";

function LandingLayout({ children }) {
  const { pathname } = useRouter();
  console.log(pathname);

  return (
    <Stack sx={{ bgcolor: pathname === "/plans" ? "grey.50" : "none" }}>
      <HeaderLanding />
      {children}
      {/* TODO: for test ui */}
      <Box sx={{ height: "20vh" }} />
      <FooterLanding />
    </Stack>
  );
}
export default LandingLayout;
