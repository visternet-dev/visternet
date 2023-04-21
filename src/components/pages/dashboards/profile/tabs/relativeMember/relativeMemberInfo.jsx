import { useState } from "react";

import Wizard from "components/ui-component/wizard/wizard";

import RelativeMemberForm from "./relativeMemberForm";
import RelativeMemberList from "./relativeMemberList";

const RelativeMemberInfo = () => {
  const [activeStep, setActiveStep] = useState(0);
  const steps = [<RelativeMemberList setActiveStep={setActiveStep} />, <RelativeMemberForm setActiveStep={setActiveStep} />];

  return <Wizard steps={steps} activeStep={activeStep} setActiveStep={setActiveStep} />;
};

export default RelativeMemberInfo;
