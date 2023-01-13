import { Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";

import { useTheme } from "@emotion/react";

function HowWorkCard({ color = "", label = "", icon = <></>, sx }) {
  const theme = useTheme();

  const getRandomPercent = () => {
    return String(Math.ceil(Math.random() * 50) + 10) + "%";
  };

  const getSign = () => {
    return Math.ceil(Math.random() * 10) % 2 === 0 ? "+" : "-";
  };

  const getPosition = () => {
    return getSign() + getRandomPercent();
  };

  return (
    <Stack
      sx={{
        height: "120px",
        width: "120px",
        overflow: "hidden",
        borderRadius: "8px",
        position: "relative",
        boxShadow: "0px 0px 22px -5px rgba(0, 0, 0, 0.25)",
        bgcolor: theme.palette.background.paper,
        ...sx
      }}
    >
      <Box
        sx={{
          bgcolor: color,
          height: "100px",
          width: "100px",
          borderRadius: "100px",
          position: "absolute",
          left: getPosition(),
          top: getPosition()
        }}
      />

      <Stack justifyContent="center" alignItems="center" spacing={0.5} sx={{ position: "relative", height: "100%", width: "100%" }}>
        <Box sx={{ fontSize: "3rem" }}>{icon}</Box>
        <Typography sx={{ fontSize: "1.5rem", fontWeight: 700 }}>{label}</Typography>
      </Stack>
    </Stack>
  );
}

export default HowWorkCard;
