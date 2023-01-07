import { Avatar, Box, Typography } from "@mui/material";

const Card = ({ user = "", type = "", text = "", imageSrc = "" }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        minHeight: "10rem",
        padding: "1rem 2rem",
        boxShadow: "0 0 20px 2px #dddddd"
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Avatar src={imageSrc} sx={{ border: "2px solid #333" }} />
          <Box sx={{ marginLeft: 1 }}>
            <Typography sx={{ fontWeight: "700", fontSize: "12px", display: "block" }} variant="span">
              {user}
            </Typography>
            <Typography sx={{ fontSize: "12px", display: "block" }} variant="span">
              {type}
            </Typography>
          </Box>
        </Box>
        <img src="/assets/images/icons/dubble-quote.svg" alt="quote" />
      </Box>
      <Box sx={{ marginBottom: "2rem" }}>{text}</Box>
    </Box>
  );
};
export default Card;
