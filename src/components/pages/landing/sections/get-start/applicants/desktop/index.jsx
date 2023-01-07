import CodeIcon from "@mui/icons-material/Code";
import { Stack } from "@mui/material";

import PolygonCard from "components/ui-component/cards/Polygon";

const worldMap = "/assets/images/landing/airLine.svg";

const styles = {
  card: {
    position: "absolute",
    transition: "0.5s"
  }
};

function LandingSectionApplicantsDesktop({ data }) {
  return (
    <Stack alignItems="center" sx={{ py: 10, position: "relative" }}>
      <img src={worldMap} style={{ width: "100%" }} />
      {/* Number 1 */}
      <PolygonCard
        {...data[0]}
        count={"1"}
        sx={{
          ...styles.card,
          left: { xs: "8%", sm: "8%", md: "8%", lg: "10%", xl: "10%" },
          bottom: { xs: "13%", sm: "13%", md: "13%", lg: "15%", xl: "20%" }
        }}
      />

      {/* Number 2 */}
      <PolygonCard
        {...data[0]}
        count={"2"}
        sx={{
          ...styles.card,
          left: { xs: "27%", sm: "27%", md: "27%", lg: "30%", xl: "30%" },
          bottom: { xs: "5%", sm: "5%", md: "5%", lg: "5%", xl: "5%" }
        }}
      />

      {/* Number 3 */}
      <PolygonCard
        {...data[0]}
        count={"3"}
        sx={{
          ...styles.card,
          left: { xs: "55%", sm: "55%", md: "55%", lg: "60%", xl: "60%" },
          bottom: { xs: "23%", sm: "23%", md: "23%", lg: "25%", xl: "30%" }
        }}
      />

      {/* Number 4 */}
      <PolygonCard
        {...data[0]}
        count={"4"}
        sx={{
          ...styles.card,
          left: { xs: "80%", sm: "80%", md: "80%", lg: "80%", xl: "80%" },
          bottom: { xs: "17%", sm: "17%", md: "17%", lg: "20%", xl: "25%" }
        }}
      />
    </Stack>
  );
}

export default LandingSectionApplicantsDesktop;
