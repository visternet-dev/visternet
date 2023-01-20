import { useEffect, useRef, useState } from "react";

import CodeIcon from "@mui/icons-material/Code";
import { Stack } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { Box, height } from "@mui/system";

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
  const [height, setHeight] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    setHeight(ref.current?.clientHeight);
    console.log("ref.current.clientHeight:", ref.current);
  });

  return (
    <Stack alignItems="center" justifyContent="center">
      <LandingTitle subTitle={translate("working-progress")} center sx={{ mb: 3 }}>
        {translate("how-it-work-for-applicants")}
      </LandingTitle>

      <Stack sx={{ position: "relative", height: "70vh", width: "100%" }} justifyContent="center" alignItems="center">
        <img
          src={bgHowWork}
          style={{ maxWidth: "100%", height: "100%", bgcolor: "red", maxHeight: "100%", position: "absolute", top: 0, bottom: 0 }}
        />

        <Grid2 container alignItems="center" justifyContent="space-around">
          <Grid2 lg={6} sx={{ display: "flex" }} justifyContent="flex-end">
            <img src={demo} style={{ height: "100%", position: "relative", zIndex: 2, alignSelf: "flex-start" }} />
          </Grid2>
          <Grid2 lg={6} justifyContent="center" sx={{ display: "flex" }}>
            <Grid2 container justifyContent="center" sx={{ width: { xs: "100%", md: "270px" } }} spacing={2}>
              {[0, 1, 2, 3].map((item, index) => (
                <Grid2 xs={12} sm={6} justifyContent="center" alignItems="center" sx={{ display: "flex", width: "fit-content" }}>
                  <HowWorkCard label={translate("title")} color={colorList[index]} icon={<CodeIcon sx={{ fontSize: "3rem" }} />} />
                </Grid2>
              ))}
            </Grid2>
          </Grid2>
        </Grid2>
      </Stack>
    </Stack>
  );
}

export default LandingSectionHowWork;
