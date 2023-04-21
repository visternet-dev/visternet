import { useState } from "react";

import Wizard from "components/ui-component/wizard/wizard";

import EducationList from "./educationList";
import FormEducation from "./educationForm";

export function EducationInfo() {
  const [activeStep, setActiveStep] = useState(0);
  const steps = [<EducationList setActiveStep={setActiveStep} />, <FormEducation setActiveStep={setActiveStep} />];

  return <Wizard steps={steps} activeStep={activeStep} setActiveStep={setActiveStep} />;
}
