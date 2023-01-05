import Image from "next/image";

import { Box } from "@mui/system";

const worldMap = "/assets/images/landing/worldMap.svg";

function LandingWorldMap() {
  return (
    <Box sx={{ width: "100%", position: "relative", maxHeight: "50%" , overflow: "hidden" }}>
      {/* TODO: ican't handle Ui this image with Image next js */}
      {/* <Image src={worldMap} alt="Visternet world Map" layout="fill" /> */}
      <img src={worldMap} style={{ width: "100%", maxHeight: " 100%" }} />
      
      <Box
        sx={{
          background: "linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%)",
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "10rem",
          zIndex: 1
        }}
      ></Box>
    </Box>
  );
}

export default LandingWorldMap;
