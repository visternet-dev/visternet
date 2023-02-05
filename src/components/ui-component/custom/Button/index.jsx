import { LoadingButton } from "@mui/lab";

import { useTheme } from "@emotion/react";

function CustomButton({ children, sx, ...params }) {
  const theme = useTheme();

  return (
    <LoadingButton
      sx={{ ...sx, borderRadius: "4px", color: params?.variant === "contained" ? "#fff" : theme.palette.primary.main, boxShadow: "none" }}
      {...params}
    >
      {children}
    </LoadingButton>
  );
}

export default CustomButton;
