import { Box, LinearProgress, Typography, useTheme } from "@mui/material";

function LinearProgressWithLabel(props, { sx }) {
  return (
    <Box sx={{ display: "flex", alignItems: "center", ...sx }}>
      <Box sx={{ width: "100%", mr: 1 }}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="text.secondary">{`${Math.round(props.value)}%`}</Typography>
      </Box>
    </Box>
  );
}

const CardPlan = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        boxShadow: "0px 1px 3px rgba(16, 24, 40, 0.1), 0px 1px 2px rgba(16, 24, 40, 0.06), 0px 0px 0px 4px #F2F4F7",
        border: "1px solid #EAECF0",
        padding: "24px 16px 24px 16px"
      }}
    >
      <Typography sx={{ margin: "1rem 1rem" }} component="p" variant="body1">
        Matching your information
      </Typography>
      <LinearProgressWithLabel sx={{ margin: "1rem" }} variant="determinate" color="primary" value={10} />
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Typography sx={{ margin: "1rem 1rem", fontWeight: "700", fontSize: "1.125rem" }} variant="span">
          Planning for Construction
        </Typography>
        <Typography sx={{ margin: "1rem 1rem" }} variant="span">
          <Typography sx={{ color: theme.palette.primary.main }} component="span">
            Ex Date:
          </Typography>
          20.10.2023
        </Typography>
      </Box>
    </Box>
  );
};
export default CardPlan;
