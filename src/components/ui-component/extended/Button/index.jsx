import { Button } from "@mui/material";

function CustomButton({ children, ...params }) {
  return (
    <Button sx={{ borderRadius: "2px", color: "#fff", boxShadow: "none" }} {...params}>
      {children}
    </Button>
  );
}

export default CustomButton;
