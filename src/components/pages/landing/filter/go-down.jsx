import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import { ButtonBase, IconButton, Stack } from "@mui/material";

import { useTheme } from "@emotion/react";

function GoDown() {
  const theme = useTheme();

  return (
    <Stack sx={{ position: "absolute", left: 0, right: 0, bottom: "-0.75rem" }} alignItems="center">
      <ButtonBase
        sx={{
          color: "#fff",
          width: "2rem",
          height: "2rem",
          display: "flex",
          borderRadius: "50%",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: theme.palette.secondary.main
        }}
      >
        <KeyboardArrowDownRoundedIcon />
      </ButtonBase>
    </Stack>
  );
}

export default GoDown;
