import { Grid, Stack } from "@mui/material";
import { Box } from "@mui/system";

import PolygonCard from "components/ui-component/cards/Polygon";

const worldMap = "/assets/images/landing/airLine.svg";

const styles = {
  card: {
    position: "absolute",
    transition: "0.5s"
  }
};

function LandingSectionApplicantsMobile({ data }) {
  return (
    <Stack alignItems="center" justifyContent="center" sx={{ py: 5, position: "relative" }}>
      <Box sx={{ display: { xs: "none", sm: "block" } }}>
        <img src={worldMap} style={{ width: "100%", position: "absolute", inset: 0, top: "30%" }} />
      </Box>

      <Grid container sx={{ position: "relative", zIndex: 9 }}>
        {/* Number 1 */}
        <Grid xs={6} sm={8} sx={{ mb: 2 }}>
          <PolygonCard {...data[0]} count={"1"} />
        </Grid>
        {/* Number 2 */}
        <Grid xs={6} sm={4} sx={{ mb: 2 }}>
          <PolygonCard {...data[0]} count={"2"} />
        </Grid>
        {/* Number 3 */}
        <Grid xs={6} sm={4} sx={{ mb: 2 }}>
          <PolygonCard {...data[0]} count={"3"} />
        </Grid>
        {/* Number 4 */}
        <Grid xs={6} sm={8} sx={{ mb: 2 }}>
          <PolygonCard {...data[0]} count={"4"} />
        </Grid>
      </Grid>
    </Stack>
  );
}

export default LandingSectionApplicantsMobile;
