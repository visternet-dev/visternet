import { Divider } from "@mui/material";

import { useTheme } from "@emotion/react";

function CustomDivider({ children, color = "primary", sx, ...params }) {
  const theme = useTheme();

  return (
    <Divider
      sx={{
        ...sx,
        width: "100%",
        "&::before, &::after": {
          borderColor: theme.palette[color].main 
        }
      }}
      {...params}
    >
      {children}
    </Divider>
  );
}

export default CustomDivider;
