import CustomButton from "components/ui-component/custom/Button";

function ActionPrevStep({ loading, title, formik, variant, mutate, calltoactions, ...params }) {
  return (
    <CustomButton
      onClick={(data) => {
        calltoactions?.onPrevStep(data);
      }}
      loading={loading}
      {...params}
    >
      {title}
    </CustomButton>
  );
}

export default ActionPrevStep;
