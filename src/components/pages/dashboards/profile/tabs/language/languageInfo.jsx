import { useState } from "react";

import Wizard from "components/ui-component/wizard/wizard";

import LanguaugeList from "./languaugeList";
import LanguaugeForm from "./languageForm";

const LanguaugeInfo = () => {
  const [activeStep, setActiveStep] = useState(0);
  const steps = [<LanguaugeList setActiveStep={setActiveStep} />, <LanguaugeForm setActiveStep={setActiveStep} />];

  return <Wizard steps={steps} activeStep={activeStep} setActiveStep={setActiveStep} />;
};

export default LanguaugeInfo;
