import { Box, Button, Grid, Typography, useTheme } from "@mui/material";

const Card = ({ title = "none", subtitle = "none", items = [{ title: "none", value: "none" }], editOnclick, deleteOnclick }) => {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === "dark";

  return (
    <Box
      sx={{ border: "1px solid", borderRadius: "4px", padding: 2, borderColor: isDarkMode ? "dark.main" : "grey.200" }}
      display="flex"
      flexDirection="column"
    >
      <Box mb={2}>
        <Typography variant="h3">{title}</Typography>
        <Typography sx={{ color: "grey.500" }} variant="caption">
          {subtitle}
        </Typography>
      </Box>
      {items.map((item) => (
        <Box mb={2}>
          <Typography color="grey.500" variant="h4">
            {item.title}:
          </Typography>
          <Typography sx={{ color: "text.primary" }} variant="body2" fontWeight="500">
            {item.value}
          </Typography>
        </Box>
      ))}
      <Grid container>
        <Grid p={1} display="flex" justifyContent="center" alignItems="center" xs={6} item>
          <Button onClick={editOnclick} fullWidth color="primary" variant="outlined">
            Edit
          </Button>
        </Grid>
        <Grid p={1} display="flex" justifyContent="center" alignItems="center" xs={6} item>
          <Button onClick={deleteOnclick} fullWidth color="error" variant="outlined">
            Delete
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};
export default Card;
