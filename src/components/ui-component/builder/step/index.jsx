import { useState } from "react";

import FormBuilder from "../form";

const StepBuilder = ({ data }) => {
  const [step, setStep] = useState(0);
  const { steps } = data;

  if (steps?.[step])
    return (
      <>
        <FormBuilder
          data={steps?.[step]}
          calltoactions={{
            onNextStep: () => {
              setStep((prev) => prev + 1);
            },
            onPrevStep: () => {
              setStep((prev) => prev - 1);
            }
          }}
        />
      </>
    );

  return <></>;
};

export default StepBuilder;
