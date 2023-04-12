import { Box, Typography } from "@mui/material";

const Tab = ({ srcIcon = "", onClick, title = { text: "", sx: {} }, caption = { text: "", sx: {} }, active = false }) => {
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
        flexGrow: "1"
      }}
    >
      {srcIcon && <img src={srcIcon} alt="profile_tab_icon" />}
      <box>
        <Typography
          sx={{
            fontWeight: 500,
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
            ...caption.sx
          }}
          component="span"
          variant="caption"
        >
          {caption.text}
        </Typography>
      </box>
    </Box>
  );
};
export default Tab;
