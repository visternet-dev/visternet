import useScreen from "hooks/useScreen";

import { useRouter } from "next/router";

import { useState } from "react";

import { ButtonBase, Stack } from "@mui/material";

import { useTheme } from "@emotion/react";

import DrawerMenuMobile from "./drawer";
import MinimalMenuMobile from "./minimal";

function MenuMobile({ data }) {
  const theme = useTheme();
  const [openDrawer, setOpenDrawer] = useState(false);
  const { mobile } = useScreen();

  const width = mobile ? "100%" : "500px";

  if (data)
    return (
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="center"
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 99999999 }}
      >
        {/* --- minimal menu --- */}
        <MinimalMenuMobile data={data} width={width} setOpenDrawer={setOpenDrawer} />

        {/* --- Drawer --- */}
        <DrawerMenuMobile openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} data={data} width={width} />
      </Stack>
    );

  return <></>;
}

export default MenuMobile;
