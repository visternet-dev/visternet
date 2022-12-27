import { useTheme } from "@emotion/react";
import { ButtonBase, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useRouter } from "next/router";

import CustomButton from "../../Button";
import { checkActiveItem } from "./tools";
import Link from "/src/Link";

/**
 * @name data = [{}]
 * @property {String} title
 * @property {String} url
 */

function MenuDesktop({ data }) {
  const theme = useTheme();
  const { pathname } = useRouter();

  console.log("pathname:", pathname);

  const activeStyle = { navigate: { width: "100% !important" }, title: { fontWeight: 600, color: theme.palette.primary.main } };

  if (data)
    return (
      <Stack direction="row" spacing={2}>
        {data.map(({ title = "", url = "" }, index) => {
          const isActive = checkActiveItem({ url, pathname });

          return (
            <Link href={url} noLinkStyle key={index}>
              <Stack
                sx={{
                  "&:hover .navigate": {
                    width: "100%"
                  }
                }}
              >
                {/* title */}
                <ButtonBase sx={{ p: 0.5, py: 0.25 }}>
                  <Typography variant="body2" sx={{ ...(isActive && activeStyle.title) }}>
                    {title}
                  </Typography>
                </ButtonBase>
                {/* navigate */}
                <Box
                  className="navigate"
                  sx={{
                    height: 3,
                    width: "0",
                    borderRadius: 1,
                    transition: "0.5s",
                    bgcolor: theme.palette.primary.main,
                    ...(isActive && activeStyle.navigate)
                  }}
                ></Box>
              </Stack>
            </Link>
          );
        })}
      </Stack>
    );

  return <></>;
}

export default MenuDesktop;
