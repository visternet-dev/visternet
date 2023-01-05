import { Stack, Typography } from "@mui/material";

import { useTheme } from "@emotion/react";

import translate from "utils/locales/translate";

function LandingMinimalRows({ data = [], haveTranslate = false, prefix = "", suffix = "", sx, ...params }) {
  const theme = useTheme();

  return (
    <Stack
      sx={{ ...sx, py: 4 }}
      direction={{ xs: "column", md: "row" }}
      justifyContent="space-between"
      alignItems="center"
      spacing={2}
      {...params}
    >
      {data.map(({ title, value }, index) => (
        <Stack
          sx={{ width: { xs: "100%", md: "auto" } }}
          direction={{ xs: "row", md: "column" }}
          spacing={{ xs: 2, md: 0 }}
          alignItems="flex-start"
          key={index}
        >
          <Typography sx={{ color: theme.palette.primary.main, textTransform: "capitalize", flex: { xs: 4, sm: 1 } }} variant="h3" noWrap>
            {haveTranslate ? translate(title) : title}
          </Typography>
          <Typography variant="h2" sx={{ fontWeight: "900 !important", flex: 1 }}>
            {prefix + value + suffix}
          </Typography>
        </Stack>
      ))}
    </Stack>
  );
}

export default LandingMinimalRows;
