import { Box, Container } from "@mui/system";

import MUK_LANDING from "constant/landing/muk";

import LandingFilter from "../../filter";
import LandingMinimalRows from "../../rows/MinimalRows";
import LandingWorldMap from "../../world-map";

function LandingSectionHeader() {
  return (
    <Box sx={{ height: "calc(100vh - 70px)" }}>
      <Container>
        <LandingMinimalRows sx={{ mt: 5 }} data={MUK_LANDING.STATISTICS} prefix="+" haveTranslate />
      </Container>
      <LandingWorldMap />
      <Container>
        <LandingFilter />
      </Container>
    </Box>
  );
}

export default LandingSectionHeader;
