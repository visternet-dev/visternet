import { useState } from "react";

import Wizard from "components/ui-component/wizard/wizard";

import ResidanceHistoryForm from "./residanceHistoryForm";
import ResidanceHistoryList from "./residanceHistoryList";

const ResidanceHistoryInfo = () => {
  const [activeStep, setActiveStep] = useState(0);
  const steps = [<ResidanceHistoryList setActiveStep={setActiveStep} />, <ResidanceHistoryForm setActiveStep={setActiveStep} />];

  return <Wizard steps={steps} activeStep={activeStep} setActiveStep={setActiveStep} />;
};

export default ResidanceHistoryInfo;
