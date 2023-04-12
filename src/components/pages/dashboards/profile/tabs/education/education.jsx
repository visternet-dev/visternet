import { useState } from "react";

import { Typography } from "@mui/material";

import CustomModal from "components/ui-component/custom/modal";
import Wizard from "components/ui-component/wizard/wizard";

import EducationList from "./educationList";
import FormEducation from "./formEducation";

export function EducationInfo() {
  const [modal, setModal] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const steps = [<EducationList setActiveStep={setActiveStep} />, <FormEducation setActiveStep={setActiveStep} />];

  return (
    <>
      <Wizard steps={steps} activeStep={activeStep} setActiveStep={setActiveStep} />
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
