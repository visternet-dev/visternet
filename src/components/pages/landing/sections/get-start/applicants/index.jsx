import CodeIcon from "@mui/icons-material/Code";
import { Stack } from "@mui/material";

import translate from "utils/locales/translate";

import PolygonCard from "components/ui-component/cards/Polygon";

const worldMap = "/assets/images/landing/airLine.svg";

const data = [
  {
    icon: <CodeIcon sx={{ fontSize: "3rem" }} />,
    title: translate("sample-title"),
    linkUrl: "#3",
    linkText: translate("read-more")
  }
];

const styles = {
  card: {
    position: "absolute"
  }
};

function LandingSectionApplicants() {
  return (
    <Stack alignItems="center" sx={{ py: 10, position: "relative" }}>
      <img src={worldMap} style={{ width: "100%" }} />

      <PolygonCard {...data[0]} count={"1"} sx={{ ...styles.card, left: "10%", bottom: "20%" }} />
      <PolygonCard {...data[0]} count={"2"} sx={{ ...styles.card, left: "30%", bottom: "5%" }} />
      <PolygonCard {...data[0]} count={"3"} sx={{ ...styles.card, left: "60%", bottom: "30%" }} />
      <PolygonCard {...data[0]} count={"4"} sx={{ ...styles.card, left: "80%", bottom: "25%" }} />
    </Stack>
  );
}

export default LandingSectionApplicants;
