import CodeIcon from "@mui/icons-material/Code";
import { Stack } from "@mui/material";
import { Box } from "@mui/system";

import translate from "utils/locales/translate";

import ComingSoon from "components/ui-component/coming-soon";

import LandingTitle from "../../title";
import HowWorkCard from "./card";

const bgHowWork = "/assets/images/landing/bgHowWork.svg";

const colorList = [
  "rgba(173, 165, 239, 0.14)",
  "rgba(255, 108, 76, 0.3)",
  "rgba(14, 51, 122, 0.22)",
  "rgba(253, 214, 104, 0.26)",
  "#EFF6FC"
];

function LandingSectionHowWork() {
  return (
    <Stack alignItems="center" justifyContent="center" sx={{ position: "relative" }}>
      <LandingTitle subTitle={translate("working-progress")} center sx={{ mb: 3 }}>
        {translate("how-it-work-for-applicants")}
      </LandingTitle>

      <img src={bgHowWork} style={{ width: "100%", maxHeight: "90vh" }} />

      <Box sx={{ position: "absolute", right: "10%", top: "24%" }}>
        <HowWorkCard label={translate("title")} color={colorList[0]} icon={<CodeIcon sx={{ fontSize: "3rem" }} />} />
      </Box>

      <Box sx={{ position: "absolute", right: "15%", top: "37%" }}>
        <HowWorkCard label={translate("title")} color={colorList[1]} icon={<CodeIcon sx={{ fontSize: "3rem" }} />} />
      </Box>

      <Box sx={{ position: "absolute", right: "24%", top: "48%" }}>
        <HowWorkCard label={translate("title")} color={colorList[2]} icon={<CodeIcon sx={{ fontSize: "3rem" }} />} />
      </Box>

      <Box sx={{ position: "absolute", right: "15.5%", top: "58%" }}>
        <HowWorkCard label={translate("title")} color={colorList[3]} icon={<CodeIcon sx={{ fontSize: "3rem" }} />} />
      </Box>

      <Box sx={{ position: "absolute", right: "33%", top: "44%" }}>
        <HowWorkCard label={translate("title")} color={colorList[4]} icon={<CodeIcon sx={{ fontSize: "3rem" }} />} />
      </Box>
    </Stack>
  );
}

export default LandingSectionHowWork;
