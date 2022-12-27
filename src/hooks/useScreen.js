import { useMediaQuery } from "@mui/material";

import { useTheme } from "@emotion/react";

const useScreen = () => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("sm"));
  const tablet = useMediaQuery(theme.breakpoints.down("md"));
  const desktop = useMediaQuery(theme.breakpoints.down("lg"));

  return {
    mobile,
    tablet,
    desktop
  };
};

export default useScreen;
