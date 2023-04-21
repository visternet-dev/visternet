import { useState } from "react";

import Wizard from "components/ui-component/wizard/wizard";

import TravelHistoryForm from "./travelHistoryForm";
import TravelHistoryList from "./travelHistoryList";

const TravelHistoryInfo = () => {
  const [activeStep, setActiveStep] = useState(0);
  const steps = [<TravelHistoryList setActiveStep={setActiveStep} />, <TravelHistoryForm setActiveStep={setActiveStep} />];

  return <Wizard steps={steps} activeStep={activeStep} setActiveStep={setActiveStep} />;
};

export default TravelHistoryInfo;
