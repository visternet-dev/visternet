import { Box } from "@mui/system";
import Logo from "layout/components/logo";

function HeaderLanding() {
  return (
    <Box sx={{display: "flex" , justifyContent: "space-between" , bgcolor: "red" }}>
      <Logo />
      test
    </Box>
  );
}

export default HeaderLanding;
