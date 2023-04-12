import React from "react";

import { Plan } from "components/pages/dashboards/cards";
import CardPlan from "components/pages/plans/cards/cardPlan";
import TestAnimation from "components/ui-component/animation/test";
import TabSection from "components/ui-component/tabSection/tabSection";
import Wizard from "components/ui-component/wizard/wizard";

const Step1 = () => <div>Step 1</div>;
const Step2 = () => <div>Step 2</div>;
const Step3 = () => <div>Step 3</div>;

const steps = [Step1, Step2, Step3];

function TextPage() {
  return (
    <>
      {/* <div>
        <TestAnimation />
      </div> */}

      {/* <CardPlan /> */}

      {/* <div>
        <Plan />
      </div> */}
      <TabSection />
      <Wizard steps={steps} />
    </>
  );
}

export default TextPage;
