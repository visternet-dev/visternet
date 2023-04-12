import { Grid } from "@mui/material";

import CustomButton from "components/ui-component/custom/Button";

const FormEducation = ({ setActiveStep }) => (
  <Grid container>
    form
    <CustomButton onClick={() => setActiveStep(0)}>close</CustomButton>
    <CustomButton onClick={() => setActiveStep(0)}>submit</CustomButton>
  </Grid>
);

export default FormEducation;
