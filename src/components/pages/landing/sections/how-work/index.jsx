import CodeIcon from "@mui/icons-material/Code";
import { Stack } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { Box } from "@mui/system";

import translate from "utils/locales/translate";

import LandingTitle from "../../title";
import HowWorkCard from "./card";

const bgHowWork = "/assets/images/landing/bgHowWork.svg";
const demo = "/assets/images/landing/demo.svg";

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

      <img src={bgHowWork} style={{ width: "100%", maxHeight: "70vh", position: "absolute", top: 0, bottom: 0 }} />

      <Grid2 container>
        <Grid2>
          <img src={demo} style={{ width: "100%", maxHeight: "70vh", position: "relative", zIndex: 2, alignSelf: "flex-start" }} />
        </Grid2>
        <Grid2>
          <Grid2 container>
            <Box sx={{ right: "10%", top: "24%" }}>
              <HowWorkCard label={translate("title")} color={colorList[0]} icon={<CodeIcon sx={{ fontSize: "3rem" }} />} />
            </Box>

            <Box sx={{ right: "15%", top: "37%" }}>
              <HowWorkCard label={translate("title")} color={colorList[1]} icon={<CodeIcon sx={{ fontSize: "3rem" }} />} />
            </Box>

            <Box sx={{ right: "24%", top: "48%" }}>
              <HowWorkCard label={translate("title")} color={colorList[2]} icon={<CodeIcon sx={{ fontSize: "3rem" }} />} />
            </Box>

            <Box sx={{ right: "15.5%", top: "58%" }}>
              <HowWorkCard label={translate("title")} color={colorList[3]} icon={<CodeIcon sx={{ fontSize: "3rem" }} />} />
            </Box>

            <Box sx={{ right: "33%", top: "44%" }}>
              <HowWorkCard label={translate("title")} color={colorList[4]} icon={<CodeIcon sx={{ fontSize: "3rem" }} />} />
            </Box>
          </Grid2>
        </Grid2>
      </Grid2>
    </Stack>
  );
}

export default LandingSectionHowWork;
