import CustomButton from "components/ui-component/custom/Button";

function ActionNextStep({ loading, title, formik, variant, mutate, calltoactions, ...params }) {
  return (
    <CustomButton
      onClick={(data) => {
        calltoactions?.onNextStep(data);
      }}
      loading={loading}
      // variant={variant ?? contained}
      {...params}
    >
      {title}
    </CustomButton>
  );
}

export default ActionNextStep;