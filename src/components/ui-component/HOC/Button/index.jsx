import { LoadingButton } from "@mui/lab";

function CustomButton({ children, sx, ...params }) {
  return (
    <LoadingButton  sx={{ ...sx, borderRadius: "4px", color: "#fff", boxShadow: "none" }} {...params}>
      {children}
    </LoadingButton >
  );
}

export default CustomButton;
