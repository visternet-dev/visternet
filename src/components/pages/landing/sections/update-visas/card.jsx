import React from "react";

import { Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";

import { useTheme } from "@emotion/react";

function UpdateVisasCard({ subTitle = "", content = "" }) {
  const theme = useTheme();

  return (
    <Stack sx={{ px: 2, py: 3, bgcolor: theme.palette.grey[100], borderRadius: "4px" }} spacing={0.5}>
      <Typography sx={{ fontSize: "10px", color: theme.palette.grey[500] }}>{subTitle}</Typography>
      <Typography variant="body1" sx={{ fontWeight: 600 }}>
        {content}
      </Typography>
    </Stack>
  );
}

export default UpdateVisasCard;
