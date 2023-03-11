import { useState } from "react";

import { Box, Grid, styled, Typography } from "@mui/material";
import { orange } from "@mui/material/colors";

import CustomButton from "components/ui-component/custom/Button";
import Modal from "components/ui-component/custom/modal";
import CustomModal from "components/ui-component/custom/modal";

import Card from "../card";

const ColorButton = styled(CustomButton)(({ theme }) => ({
  color: theme.palette.getContrastText(orange[500])
}));

export function EducationInfo() {
  const [modal, setModal] = useState(false);
  return (
    <>
      <Grid container>
        <Grid xs={12}>
          <ColorButton onClick={() => setModal(true)} sx={{ border: "1px solid #EF6820", color: "#EF6820" }} size="small">
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
      <CustomModal isOpen={modal} onClose={() => setModal(false)}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Text in a modal
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
        </Typography>
      </CustomModal>
    </>
  );
}
