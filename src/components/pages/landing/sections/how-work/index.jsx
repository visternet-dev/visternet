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
  "rgba(255, 108, 76, 0.3)",
  "rgba(14, 51, 122, 0.22)",
  "#EFF6FC",
  "rgba(253, 214, 104, 0.26)",
  "rgba(173, 165, 239, 0.14)"
];

function LandingSectionHowWork() {
  return (
    <Stack alignItems="center" justifyContent="center" sx={{ position: "relative" }}>
      <LandingTitle subTitle={translate("working-progress")} center sx={{ mb: 3 }}>
        {translate("how-it-work-for-applicants")}
      </LandingTitle>

      <img src={bgHowWork} style={{ width: "100%", maxHeight: "70vh", position: "absolute", top: 0, bottom: 0 }} />

      <Grid2 container alignItems="center">
        <Grid2>
          <img src={demo} style={{ width: "100%", maxHeight: "70vh", position: "relative", zIndex: 2, alignSelf: "flex-start" }} />
        </Grid2>
        <Grid2>
          <Grid2 container justifyContent="center" sx={{bgcolor: "red" }} spacing={2}>
            {[0, 1, 2, 3].map((item, index) => (
              <Grid2 xs={12} sm={6} justifyContent="center" alignItems="center" sx={{ display: "flex" , bgcolor: "green" , width: "fit-content" }}>
                <HowWorkCard label={translate("title")} color={colorList[index]} icon={<CodeIcon sx={{ fontSize: "3rem" }} />} />
              </Grid2>
            ))}
          </Grid2>
        </Grid2>
      </Grid2>
    </Stack>
  );
}

export default LandingSectionHowWork;
