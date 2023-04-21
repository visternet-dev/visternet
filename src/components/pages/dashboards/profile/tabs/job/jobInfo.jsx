import { useState } from "react";

import Wizard from "components/ui-component/wizard/wizard";

import JobForm from "./jobForm";
import JobList from "./jobList";

const JobInfo = () => {
  const [activeStep, setActiveStep] = useState(0);
  const steps = [<JobList setActiveStep={setActiveStep} />, <JobForm setActiveStep={setActiveStep} />];

  return <Wizard steps={steps} activeStep={activeStep} setActiveStep={setActiveStep} />;
};

export default JobInfo;
