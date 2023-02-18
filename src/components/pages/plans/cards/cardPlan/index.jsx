import { Avatar, Box, Chip, LinearProgress, Stack, Typography, useTheme } from "@mui/material";

import CustomButton from "components/ui-component/custom/Button";

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
        // boxShadow: "0px 1px 3px rgba(16, 24, 40, 0.1), 0px 1px 2px rgba(16, 24, 40, 0.06), 0px 0px 0px 4px #F2F4F7",
        border: "1px solid #EAECF0",
        padding: "24px 16px 24px 16px",
        bgcolor: theme.palette.background.paper
      }}
    >
      <Typography sx={{ margin: "1rem 1rem" }} component="p" variant="body1">
        Matching your information
      </Typography>
      <LinearProgressWithLabel sx={{ margin: "1rem" }} variant="determinate" color="primary" value={10} />
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: "0.5rem" }}>
        <Box sx={{ display: "flex", flexDirection: "column", overflow: "auto" }}>
          <Typography sx={{ margin: "1rem 1rem", fontWeight: "700", fontSize: "1.125rem" }} variant="span">
            Planning for Construction
          </Typography>
        </Box>
        <Typography sx={{ margin: "1rem 1rem" }} variant="span">
          <Typography sx={{ color: theme.palette.primary.main, fontWeight: "700", mr: 0.5 }} component="span">
            Ex Date:
          </Typography>
          20.10.2023
        </Typography>
      </Box>
      <Box display="flex" gap="1rem" flexWrap="nowrap" overflow="auto" mb="1rem">
        <Chip label="Toronto,Canada" avatar={<Avatar src="/static/images/avatar/1.jpg" />} />
        <Chip variant="solid" label="Start-up Visa" />
        <Chip variant="solid" color="error" label="Cloese" />
        <Chip variant="solid" color="info" label="Cloese" />
        <Chip variant="solid" color="primary" label="Cloese" />
        <Chip variant="solid" color="secondary" label="Cloese" />
        <Chip variant="solid" color="success" label="Cloese" />
      </Box>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box sx={{ display: "flex", width: "100%" }}>
          <Box sx={{ marginRight: "0.604rem" }}>
            <img src="/assets/images/icons/governmental.svg" />
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography sx={{ fontWeight: "bold" }} variant="body1">
              Governmental:
            </Typography>
            <Typography>£14,250.00 GBP</Typography>
          </Box>
        </Box>
        <Box sx={{ display: "flex", width: "100%" }}>
          <Box sx={{ marginRight: "0.604rem" }}>
            <img src="/assets/images/icons/governmental.svg" />
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography sx={{ fontWeight: "bold" }} variant="body1">
              Governmental:
            </Typography>
            <Typography>£14,250.00 GBP</Typography>
          </Box>
        </Box>
      </Box>
      <Stack mt="1.5rem" direction="row" spacing={2}>
        <CustomButton fullWidth disableElevation size="large" variant="contained">
          Start Application
        </CustomButton>

        <CustomButton fullWidth size="large" color="primary">
          Program Details
        </CustomButton>
      </Stack>
    </Box>
  );
};

export default CardPlan;
