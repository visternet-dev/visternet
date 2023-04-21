import { useState } from "react";

import FormBuilder from "../form";

const StepBuilder = ({ data, cta }) => {
  const [step, setStep] = useState(0);
  const { steps } = data;

  if (steps?.[step])
    return (
      <>
        <FormBuilder
          data={steps?.[step]}
          cta={{
            ...cta,
            onNextStep: () => {
              setStep((prev) => prev + 1);
              cta?.onNextStep();
            },
            onPrevStep: () => {
              setStep((prev) => prev - 1);
              cta?.onNextStep();
            }
          }}
        />
      </>
    );

  return <></>;
};

export default StepBuilder;
