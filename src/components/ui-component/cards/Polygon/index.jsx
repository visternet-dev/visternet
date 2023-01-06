import React from "react";

import { Box } from "@mui/system";

const BG = "/assets/images/landing/5-sided.svg";

function PolygonCard() {
  return (
    <Box>
      <Box
        sx={{
          bgcolor: "red",
          height: "200px",
          width: "200px",
        }}
      >
        <img src={BG} style={{ height: "100%", width: "100%" }} />
      </Box>
    </Box>
  );
}

export default PolygonCard;
