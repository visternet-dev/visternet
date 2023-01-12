import Link from "next/link";

import { Box, Grid, Typography } from "@mui/material";

const Card = ({ thumbnail = "", date = "", title = "", description = "", path = "" }) => {
  return (
    <Grid sx={{ background: "#fff", boxShadow: "0 4px 44px -14px grey", borderRadius: "11px" }} flexDirection="column" container>
      <Grid xs={12} item>
        <Box sx={{ borderRadius: "10px", overflow: "hidden" }}>
          <img style={{ objectFit: "cover" }} width="100%" height="200px" src={thumbnail} />
        </Box>
      </Grid>
      <Grid sx={{ padding: "1rem" }} flexDirection="column" container>
        <Typography sx={{ margin: "0.5rem 0" }} variant="span">
          {date}
        </Typography>
        <Typography sx={{ margin: "0.5rem 0" }} variant="h3">
          {title}
        </Typography>
        <Typography sx={{ margin: "0.5rem 0" }} variant="body2">
          {description}
        </Typography>
        <Typography sx={{ color: "#0074CE", cursor: "pointer", margin: "0.5rem 0" }} variant="span">
          <Link href={path}>Read More</Link>
        </Typography>
      </Grid>
    </Grid>
  );
};
export default Card;
