import React from "react";

import CodeIcon from "@mui/icons-material/Code";
import { Stack, Typography } from "@mui/material";

import { useTheme } from "@emotion/react";

import translate from "utils/locales/translate";

function ComingSoon() {
  const theme = useTheme();
  return (
    <Stack alignItems="center" justifyContent="center" sx={{ py: 10, width: "100%" }}>
      <CodeIcon sx={{ color: theme.palette.primary.main, fontSize: "5rem" }} />
      <Typography sx={{ fontSize: "1.75rem", fontWeight: 900, color: theme.palette.primary.main }}>{translate("coming-soon")}</Typography>
    </Stack>
  );
}

export default ComingSoon;
