import { useState } from "react";

import Wizard from "components/ui-component/wizard/wizard";

import MilitaryServiceForm from "./militaryServiceForm";
import MilitaryServiceList from "./militaryServiceList";

const MilitaryServiceInfo = () => {
  const [activeStep, setActiveStep] = useState(0);
  const steps = [<MilitaryServiceList setActiveStep={setActiveStep} />, <MilitaryServiceForm setActiveStep={setActiveStep} />];

  return <Wizard steps={steps} activeStep={activeStep} setActiveStep={setActiveStep} />;
};

export default MilitaryServiceInfo;
