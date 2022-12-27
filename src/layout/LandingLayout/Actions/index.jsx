import { Stack } from "@mui/material";
import CustomButton from "components/ui-component/extended/Button";

function LandingActions() {
  return (
    <Stack direction="row" spacing={1}>
      <CustomButton variant="contained">Login</CustomButton>
      <CustomButton variant="contained">Register</CustomButton>
    </Stack>
  );
}

export default LandingActions;
