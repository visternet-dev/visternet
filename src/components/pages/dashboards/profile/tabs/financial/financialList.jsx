import { Grid, styled } from "@mui/material";
import { orange } from "@mui/material/colors";

import CustomButton from "components/ui-component/custom/Button";

import Card from "../../card";

const ColorButton = styled(CustomButton)(({ theme }) => ({
  color: theme.palette.getContrastText(orange[500])
}));

const FinancialList = ({ setActiveStep }) => (
  <Grid container spacing={1}>
    <Grid item xs={12}>
      {/* Go to the create form */}
      <ColorButton onClick={() => setActiveStep(1)} sx={{ border: "1px solid #EF6820", color: "#EF6820" }} size="small">
        Add Financial
      </ColorButton>
    </Grid>

    {/* TODO: Get Data from API */}
    {[1, 2, 3].map((item, index) => (
      <Grid item xs={6}>
        <Card
          key={index}
          title="University Name"
          subtitle="Azad University Tehran North Branch"
          items={[{ title: "Country", value: "IRAN" }, { title: "Date", value: "2017 - 2021" }, , { title: "Grade", value: "18.58" }]}
        />
      </Grid>
    ))}
  </Grid>
);

export default FinancialList;
