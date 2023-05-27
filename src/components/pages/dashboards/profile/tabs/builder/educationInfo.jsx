import { useState } from "react";

import Wizard from "components/ui-component/wizard/wizard";

import FormEducation from "./educationForm";
import EducationList from "./educationList";

const BuilderTabInfo = ({ controller }) => {
  // STATES
  const [activeStep, setActiveStep] = useState(0);
  const [editId, setEditId] = useState(0);

  // STEPS
  const steps = [
    <EducationList setActiveStep={setActiveStep} setEditId={setEditId} controller={controller} />,
    <FormEducation setActiveStep={setActiveStep} editId={editId} controller={controller} />
  ];

  return <Wizard steps={steps} activeStep={activeStep} setActiveStep={setActiveStep} />;
};

export default BuilderTabInfo;
