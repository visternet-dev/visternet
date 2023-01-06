import { Stack } from "@mui/material";

import PolygonCard from "components/ui-component/cards/Polygon";

const worldMap = "/assets/images/landing/airLine.svg";

function LandingSectionApplicants() {
  return (
    <Stack alignItems="center" sx={{ py: 10 }}>
      <img src={worldMap} style={{ width: "100%" }} />

      <PolygonCard />
    </Stack>
  );
}

export default LandingSectionApplicants;
