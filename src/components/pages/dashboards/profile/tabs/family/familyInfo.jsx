import { useState } from "react";

import Wizard from "components/ui-component/wizard/wizard";

import FamilyForm from "./familyForm";
import FamilyList from "./familyList";

const FamilyInfo = () => {
  const [activeStep, setActiveStep] = useState(0);
  const steps = [<FamilyList setActiveStep={setActiveStep} />, <FamilyForm setActiveStep={setActiveStep} />];

  return <Wizard steps={steps} activeStep={activeStep} setActiveStep={setActiveStep} />;
};

export default FamilyInfo;
