import ActionSubmit from "./submit";

const actions = {
  submit: ActionSubmit
};

function ActionsBuilder(props) {
  // Destructuer Data
  const { type } = props;

  const Action = actions[type];

  return <Action {...props} />;
}

export default ActionsBuilder;
