import { ButtonBase, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";

import { useTheme } from "@emotion/react";

import Link from "/src/Link";

function ItemMenuMobile({ url, title, isActive }) {
  const theme = useTheme();
  const activeStyle = { navigate: { width: "100% !important" }, title: { fontWeight: 600, color: "#fff" } };

  return (
    <Link href={url} noLinkStyle>
      <Stack
        sx={{
          position: "relative",
          "&:hover .navigate ": {
            width: "100%"
          }
        }}
      >
        {/* navigate */}
        <Box
          className="navigate"
          sx={{
            width: "0",
            borderRadius: "2px",
            transition: "0.5s",
            position: "absolute",
            top: 0,
            bottom: 0,
            left: 0,
            bgcolor: theme.palette.primary.main,
            ...(isActive && activeStyle.navigate)
          }}
        ></Box>

        {/* title */}
        <ButtonBase sx={{ p: 1.5, py: 1.25, position: "relative", zIndex: 999999 }}>
          <Typography
            variant="body2"
            sx={{
              transition: "0.5s",
              ...(isActive && activeStyle.title),
              position: "relative",
              zIndex: 999999,
              "&:hover": {
                color: "#fff"
              }
            }}
            noWrap
          >
            {title}
          </Typography>
        </ButtonBase>
      </Stack>
    </Link>
  );
}

export default ItemMenuMobile;
