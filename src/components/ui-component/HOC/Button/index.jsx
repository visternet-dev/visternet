import { Button } from "@mui/material";

function CustomButton({ children, sx, ...params }) {
  return (
    <Button sx={{ ...sx, borderRadius: "4px", color: "#fff", boxShadow: "none" }} {...params}>
      {children}
    </Button>
  );
}

export default CustomButton;
