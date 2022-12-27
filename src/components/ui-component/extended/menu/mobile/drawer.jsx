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
      <Stack sx={{ p: 1, width, bgcolor: "#fff", mx: "auto", pb: 12, borderRadius: "4px" }} spacing={2}>
        {data.map(({ title = "", url = "" }, index) => {
          const isActive = checkActiveItem({ url, pathname });

          return <ItemMenuMobile url={url} title={title} isActive={isActive} key={index} />;
        })}
      </Stack>
    </Drawer>
  );
}

export default DrawerMenuMobile;
