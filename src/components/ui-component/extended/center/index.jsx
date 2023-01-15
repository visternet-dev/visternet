import React from "react";

import { Stack } from "@mui/material";

function Center({ children, direction = "row", sx, ...params }) {
  return (
    <Stack direction={direction} alignItems="center" justifyContent="center" sx={{ width: "100%", height: "100%", ...sx }} {...params}>
      {children}
    </Stack>
  );
}

export default Center;
