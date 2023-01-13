import { Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";

import { useTheme } from "@emotion/react";

function LandingTitle({
  sx = {},
  children,
  subTitle = "",
  center = false,
  variant = "h2",
  leftLine = true,
  rightLine = true,
  fontSize = "2rem",
  subTitleBottom = ""
}) {
  const theme = useTheme();

  // styles
  const styles = {
    line: { bgcolor: theme.palette.primary.main, width: "5px", height: "1.5rem" },
    subTitle: {
      color: theme.palette.primary.main,
      ...(center ? { textAlign: "center" } : { ml: 2 })
    }
  };

  return (
    <Stack sx={{ ...sx }}>
      {subTitle && <Typography sx={styles.subTitle}>{subTitle}</Typography>}

      <Stack direction="row" spacing={1.5} alignItems="center">
        {leftLine && <Box sx={styles.line} />}
        <Typography variant={variant} sx={{ fontSize, textTransform: "uppercase" }}>
          {children}
        </Typography>
        {rightLine && <Box sx={styles.line} />}
      </Stack>

      {subTitleBottom && <Typography sx={styles.subTitle}>{subTitleBottom}</Typography>}
    </Stack>
  );
}

export default LandingTitle;
