import React from "react";

import { Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";

import { useTheme } from "@emotion/react";

const BG = "/assets/images/landing/5-sided.svg";

function PolygonCardHeader({ sx, icon, count, ...params }) {
  const theme = useTheme();

  return (
    <Stack sx={{ ...sx, height: "100px", width: "100px", position: "relative" }} alignItems="center" justifyContent="center" {...params}>
      {/* BG */}
      <img
        src={BG}
        style={{
          height: "100%",
          width: "100%",
          position: "absolute",
          inset: 0,
          filter: "drop-shadow(0px 0px 17px rgba(63, 81, 181, 0.23))"
        }}
      />
      {/* Icon */}
      <Box sx={{ position: "relative" }}>{icon}</Box>

      {/* Counter */}
      <Stack
        alignItems="center"
        justifyContent="center"
        sx={{
          bgcolor: theme.palette.primary.main,
          borderRadius: "100px",
          position: "absolute",
          height: "1.75rem",
          width: "1.75rem",
          left: "-0.5rem",
          top: "0.5rem"
        }}
      >
        <Typography sx={{ fontWeight: 700, color: "#fff" }}>{count}</Typography>
      </Stack>
    </Stack>
  );
}

export default PolygonCardHeader;
