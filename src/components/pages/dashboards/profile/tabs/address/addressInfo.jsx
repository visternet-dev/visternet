import { useState } from "react";

import Wizard from "components/ui-component/wizard/wizard";

import AddressForm from "./addressForm";
import AddressList from "./addressList";

const AddressInfo = () => {
  const [activeStep, setActiveStep] = useState(0);
  const steps = [<AddressList setActiveStep={setActiveStep} />, <AddressForm setActiveStep={setActiveStep} />];

  return <Wizard steps={steps} activeStep={activeStep} setActiveStep={setActiveStep} />;
};

export default AddressInfo;
