import Image from "next/image";

import { Box, Typography } from "@mui/material";

const Card = ({ size = { height: "17.313rem", width: "13.875rem" }, image = "", text = "None", onClick }) => {
  return (
    <Box
      onClick={onClick}
      sx={{ position: "relative", height: size.height, width: size.width, borderRadius: "6px", overflow: "hidden", cursor: "pointer" }}
    >
      <img style={{ objectFit: "cover", width: "100%", height: "100%" }} src={image} />
      <Box
        sx={{
          position: "absolute",
          top: 0,
          width: "100%",
          height: "100%",
          background: "linear-gradient(0deg, rgba(0, 0, 0, 0.53), rgba(0, 0, 0, 0.53))",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <Typography sx={{ color: "#fff", fontSize: "1.5rem", textTransform: "uppercase" }} variant="h6">
          {text}
        </Typography>
      </Box>
      <Typography
        sx={{
          width: "160px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          bottom: 0,
          left: "50%",
          transform: "translateX(-50%)",
          padding: "0.8rem 0",
          borderRadius: "6px 6px 0 0",
          background: "#4CB1FF",
          color: "#fff",
          textTransform: "uppercase",
          fontSize: "1.063rem"
        }}
        variant="span"
      >
        get started
      </Typography>
    </Box>
  );
};
export default Card;
