import { useState } from "react";

import Wizard from "components/ui-component/wizard/wizard";

import FormEducation from "./educationForm";
import EducationList from "./educationList";

const EducationInfo = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [editId, setEditId] = useState(0);
  const steps = [<EducationList setActiveStep={setActiveStep} setEditId={setEditId} />, <FormEducation setActiveStep={setActiveStep} editId={editId} />];

  return <Wizard steps={steps} activeStep={activeStep} setActiveStep={setActiveStep} />;
};

export default EducationInfo;
