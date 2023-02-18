import { SearchSharp } from "@mui/icons-material";
import { Box, Card, Grid, InputAdornment, TextField } from "@mui/material";

import Layout from "layout";

import { Plan } from "components/pages/dashboards/cards";
import LAYOUT from "constant";

function Communication() {
  return (
    <Grid container>
      <Grid p="0.5rem" xs={12} md={4} item>
        <Card
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            borderRadius: "12px",
            padding: "16px",
            border: "1px solid #F5F5F5"
          }}
        >
          <Box>
            <TextField
              fullWidth
              sx={{ bgcolor: "#F5F5F5", overflow: "hidden", ".MuiOutlinedInput-notchedOutline": { borderRadius: "12px" } }}
              id="outlined-basic"
              variant="outlined"
              placeholder="Search"
              InputProps={{
                sx: { orderRadius: "12px" },
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchSharp />
                  </InputAdornment>
                )
              }}
            />
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem", overflow: "auto", maxHeight: "calc(100vh - 15rem)" }}>
            <Plan />
            <Plan />
            <Plan />
            <Plan />
            <Plan />
          </Box>
        </Card>
      </Grid>
      <Grid p="0.5rem" xs={12} md={8} item>
        <Card
          sx={{
            borderRadius: "12px",
            padding: "16px",
            border: "1px solid #F5F5F5",
            minHeight: "100%",

            position: "relative",
            "& .bg_chat": { position: "absolute", right: "0", top: "50%", transform: "translate(0, -50%)", opacity: "0.5" }
          }}
        >
          <img className="bg_chat" src="/assets/images/plans/bg_chat.svg" />
        </Card>
      </Grid>
    </Grid>
  );
}

Communication.getLayout = function getLayout(page) {
  return <Layout variant={LAYOUT.DASHBOARD}>{page}</Layout>;
};

export default Communication;
