import { FormattedMessage } from "react-intl";

import { Box, Typography } from "@mui/material";

const Tab = ({ srcIcon = "", onClick, title, active = false, status, ...params }) => {
  return (
    <Box
      onClick={onClick}
      sx={{
        display: "flex",
        alignItems: "flex-start",
        padding: "16px",
        gap: "10px",
        width: "167.67px",
        height: "74px",
        background: active ? "#f5f5f5" : "#fff",
        borderRadius: "12px",
        alignItems: "center",
        flex: "none",
        order: "1",
        flexGrow: "1",
        cursor: "pointer"
      }}
      {...params}
    >
      {srcIcon && <img src={srcIcon} alt="profile_tab_icon" />}
      <box>
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
      </box>
    </Box>
  );
};
export default Tab;
