import { useState } from "react";

import Wizard from "components/ui-component/wizard/wizard";

import FinancialList from "./financialList";
import FinancialForm from "./financialForm";

const FinancialInfo = () => {
  const [activeStep, setActiveStep] = useState(0);
  const steps = [<FinancialList setActiveStep={setActiveStep} />, <FinancialForm setActiveStep={setActiveStep} />];

  return <Wizard steps={steps} activeStep={activeStep} setActiveStep={setActiveStep} />;
};

export default FinancialInfo;
