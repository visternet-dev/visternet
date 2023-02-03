import None from "components/ui-component/none";

import ActionReset from "./reset";
import ActionSubmit from "./submit";

const actions = {
  submit: ActionSubmit,
  reset: ActionReset
};

function ActionsBuilder(props) {
  // Destructuer Data
  const { type } = props;

  //  Get Target Action Based on ype
  const Action = actions[type] ?? None;

  return <Action {...props} />;
}

export default ActionsBuilder;
