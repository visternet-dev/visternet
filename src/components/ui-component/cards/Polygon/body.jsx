import Link from "Link";

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";

import { useTheme } from "@emotion/react";

import translate from "utils/locales/translate";

const BG = "/assets/images/landing/5-sided.svg";

function PolygonCardBody({ title, path, subTitle }) {
  const theme = useTheme();

  return (
    <Stack alignItems="center" justifyContent="center" spacing={1}>
      <Typography variant="h4" sx={{ fontWeight: 700, fontSize: "1.25rem" }}>
        {title}
      </Typography>

      <Link href={path} noLinkStyle>
        <Stack sx={{ color: theme.palette.primary.main }} direction="row" spacing={0.5} alignItems="center" justifyContent="center">
          <Typography>{subTitle}</Typography>
          <ArrowForwardIosIcon sx={{ fontSize: "1rem" }} />
        </Stack>
      </Link>
    </Stack>
  );
}

export default PolygonCardBody;
