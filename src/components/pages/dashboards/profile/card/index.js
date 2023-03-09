import { Box, Button, Grid, Typography } from "@mui/material";

const Card = ({ title = "none", subtitle = "none", items = [{ title: "none", value: "none" }], editOnclick, deleteOnclick }) => {
  return (
    <Box sx={{ border: "1px solid #F5F5F5", padding: 2 }} display="flex" flexDirection="column">
      <Box mb={2}>
        <Typography variant="h3">{title}</Typography>
        <Typography sx={{ color: "#EF6820" }} variant="caption">
          {subtitle}
        </Typography>
      </Box>
      {items.map((item) => (
        <Box mb={2}>
          <Typography color="#9e9e9e" variant="h4">
            {item.title}:
          </Typography>
          <Typography color="#333" variant="body2" fontWeight="500">
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
