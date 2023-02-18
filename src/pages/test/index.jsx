import React from "react";

import { Plan } from "components/pages/dashboards/cards";
import CardPlan from "components/pages/plans/cards/cardPlan";
import TestAnimation from "components/ui-component/animation/test";

function TextPage() {
  return (
    <>
      {/* <div>
        <TestAnimation />
      </div> */}
      <div>
        {/* <CardPlan /> */}
        <Plan />
      </div>
    </>
  );
}

export default TextPage;
