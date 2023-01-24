import DynamicField from "./dynamic";

function Fields(props) {
  const { fields, formik, setSchema } = props || {};

  const params = {
    formik,
    setSchema
  };

  if (fields)
    return (
      <>
        {fields.map((fieldProps, index) => (
          <DynamicField {...fieldProps} {...params} key={index} />
        ))}
      </>
    );

  return <></>;
}

export default Fields;
