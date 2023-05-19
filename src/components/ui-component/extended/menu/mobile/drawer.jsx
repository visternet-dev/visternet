import { useRouter } from "next/router";

import { Drawer, Stack } from "@mui/material";

import { checkActiveItem } from "../tools";
import ItemMenuMobile from "./Item";

function DrawerMenuMobile({ openDrawer, setOpenDrawer, data, width }) {
  const { pathname } = useRouter();

  return (
    <Drawer
      anchor="bottom"
      open={openDrawer}
      onClose={() => {
        setOpenDrawer(false);
      }}
      sx={{
        "& .MuiDrawer-paper": {
          bgcolor: "transparent",
          boxShadow: "none",
          display: "flex",
          justifyContent: "center"
        }
      }}
    >
      <Stack sx={{ p: 1, width, bgcolor: "background.paper", mx: "auto", pb: 12, borderRadius: "4px" }} spacing={2}>
        {data.map(({ title = "", path = "" }, index) => {
          const isActive = checkActiveItem({ path, pathname });

          return <ItemMenuMobile path={path} title={title} isActive={isActive} key={index} />;
        })}
      </Stack>
    </Drawer>
  );
}

export default DrawerMenuMobile;
