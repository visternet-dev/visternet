import { FormattedMessage } from "react-intl";

import { Box, Typography, useTheme } from "@mui/material";

const Tab = ({ srcIcon = "", onClick, title, active = false, status, ...params }) => {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === "dark";

  return (
    <Box
      onClick={onClick}
      sx={{
        transition: "0.5s",
        display: "flex",
        alignItems: "flex-start",
        padding: "16px",
        gap: "10px",
        height: "74px",
        background: active ? (isDarkMode ? theme.palette.dark.main : theme.palette.grey[100]) : theme.palette.background.default,
        borderRadius: "12px",
        alignItems: "center",
        flexGrow: "1",
        cursor: "pointer"
      }}
      {...params}
    >
      {srcIcon && <img src={srcIcon} alt="profile_tab_icon" />}
      <Box>
        <Typography
          sx={{
            fontWeight: 600,
            fontSize: "14px",
            lineHeight: "20px",
            color: active ? "#EF6820" : "grey.500",
            ...title.sx
          }}
          component="h5"
          variant="body1"
        >
          {title.text}
        </Typography>
        <Typography
          sx={{
            fontWeight: 400,
            fontSize: "10px",
            lineHeight: "16px",
            color: status === "pendding" ? "#EF6820" : "#00C853"
          }}
          component="span"
          variant="caption"
        >
          {status === "pendding" ? (
            <>
              <FormattedMessage id="not-completed" /> !
            </>
          ) : (
            <FormattedMessage id="completed" />
          )}
        </Typography>
      </Box>
    </Box>
  );
};
export default Tab;
