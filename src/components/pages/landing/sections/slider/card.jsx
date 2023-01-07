import Image from "next/image";
import Link from "next/link";

import { Box, Grid, Typography } from "@mui/material";

const Card = () => {
  return (
    <Grid sx={{ background: "#fff", boxShadow: "0 4px 44px -14px grey", borderRadius: "11px" }} flexDirection="column" container>
      <Grid xs={12} item>
        <Box sx={{ borderRadius: "10px", overflow: "hidden" }}>
          <img width="100%" height="200px" src="/assets/images/cards/card-1.jpg" />
        </Box>
      </Grid>
      <Grid sx={{ padding: "1rem" }} flexDirection="column" container>
        <Typography sx={{ margin: "0.5rem 0" }} variant="span">
          10 Jun 2022{" "}
        </Typography>
        <Typography sx={{ margin: "0.5rem 0" }} variant="h3">
          Top Winter Wonderlands for Students in Ontario This Year
        </Typography>
        <Typography sx={{ margin: "0.5rem 0" }} variant="body2">
          Thinking about studying design and illustration in Canada? As an international student, there are many good reasons to choose
          Canada. Whether you’d like to become an animator, creative
        </Typography>
        <Typography sx={{ color: "#0074CE", cursor: "pointer", margin: "0.5rem 0" }} variant="span">
          <Link href={"/"}>Read More</Link>
        </Typography>
      </Grid>
    </Grid>
  );
};
export default Card;
