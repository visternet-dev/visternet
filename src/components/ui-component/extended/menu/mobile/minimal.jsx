import { useRouter } from "next/router";

import MenuIcon from "@mui/icons-material/Menu";
import { ButtonBase, Stack } from "@mui/material";

import { useTheme } from "@emotion/react";

import { checkActiveItem } from "../tools";
import ItemMenuMobile from "./Item";

function MinimalMenuMobile({ width, data, setOpenDrawer }) {
  const theme = useTheme();
  const { pathname } = useRouter();

  const COUNT_SHOW_MINIMAL_ITEM = 4;
  const countItems = data.length;

  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      sx={{
        width,
        px: 3,
        py: 2,
        borderRadius: "4px 4px 0 0",
        boxShadow: theme.shadows[24],
        position: "relative",
        zIndex: 9999999,
        bgcolor: "#fff"
      }}
    >
      {data.map(({ title = "", path = "" }, index) => {
        const isActive = checkActiveItem({ path, pathname });

        if (index < COUNT_SHOW_MINIMAL_ITEM - 1 || countItems === COUNT_SHOW_MINIMAL_ITEM)
          return <ItemMenuMobile path={path} title={title} isActive={isActive} key={index} />;
      })}

      {data.length > COUNT_SHOW_MINIMAL_ITEM && countItems !== COUNT_SHOW_MINIMAL_ITEM && (
        <ButtonBase
          onClick={() => {
            setOpenDrawer((prev) => !prev);
          }}
        >
          <MenuIcon />
        </ButtonBase>
      )}
    </Stack>
  );
}

export default MinimalMenuMobile;
