import { Grid, styled } from "@mui/material";
import { orange } from "@mui/material/colors";

import CustomButton from "components/ui-component/custom/Button";

import Card from "../card";

const ColorButton = styled(CustomButton)(({ theme }) => ({
  color: theme.palette.getContrastText(orange[500])
}));

export function FamilyInfo() {
  console.log("FamilyInfo");
  return (
    <Grid container>
      <Grid xs={12}>
        <ColorButton sx={{ border: "1px solid #EF6820", color: "#EF6820" }} size="small">
          <img src="" />
          Add Education
        </ColorButton>
      </Grid>
      <Grid mt={2} p={1} xs={6}>
        <Card
          title="University Name"
          subtitle="Azad University Tehran North Branch"
          items={[{ title: "Country", value: "IRAN" }, { title: "Date", value: "2017 - 2021" }, , { title: "Grade", value: "18.58" }]}
        />
      </Grid>
      <Grid mt={2} p={1} xs={6}>
        <Card
          title="University Name"
          subtitle="Azad University Tehran North Branch"
          items={[{ title: "Country", value: "IRAN" }, { title: "Date", value: "2017 - 2021" }, , { title: "Grade", value: "18.58" }]}
        />
      </Grid>
      <Grid mt={2} p={1} xs={6}>
        <Card
          title="University Name"
          subtitle="Azad University Tehran North Branch"
          items={[{ title: "Country", value: "IRAN" }, { title: "Date", value: "2017 - 2021" }, , { title: "Grade", value: "18.58" }]}
        />
      </Grid>
    </Grid>
  );
}
