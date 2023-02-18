import DynamicField from "./dynamic";

function FieldsBuilder(props) {
  const { fields } = props || {};

  if (fields) {
    return (
      <>
        {fields.map((fieldProps, index) => (
          <DynamicField {...fieldProps} {...props} key={index} />
        ))}
      </>
    );
  }

  return <></>;
}

export default FieldsBuilder;
