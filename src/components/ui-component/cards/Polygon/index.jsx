import { Stack } from "@mui/material";

import PolygonCardBody from "./body";
import PolygonCardHeader from "./header";

function PolygonCard({ sx, sxHeader, sxBody, icon = <></>, count = "0", title = "", path = "#", subTitle = translate("read-more") }) {
  return (
    <Stack spacing={1} sx={{ ...sx }} alignItems="center" justifyContent="center">
      {/* Header Card */}
      <PolygonCardHeader sx={{ ...sxHeader }} icon={icon} count={count} />
      {/* Body Card */}
      <PolygonCardBody sx={{ ...sxBody }} title={title} path={path} subTitle={subTitle} />
    </Stack>
  );
}

export default PolygonCard;
