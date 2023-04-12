import { useState } from "react";

import FormBuilder from "../form";

const StepBuilder = ({ data, calltoactions }) => {
  const [step, setStep] = useState(0);
  const { steps } = data;

  if (steps?.[step])
    return (
      <>
        <FormBuilder
          data={steps?.[step]}
          calltoactions={{
            ...calltoactions,
            onNextStep: () => {
              setStep((prev) => prev + 1);
              calltoactions?.onNextStep();
            },
            onPrevStep: () => {
              setStep((prev) => prev - 1);
              calltoactions?.onNextStep();
            }
          }}
        />
      </>
    );

  return <></>;
};

export default StepBuilder;
