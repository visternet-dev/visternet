import CustomButton from "components/ui-component/custom/Button";

function ActionNextStep({ loading, title, formik, variant, callToActions, ...params }) {
  return (
    <CustomButton
      onClick={(data) => {
        console.log("test:", "------" , callToActions);
        callToActions?.onNextStep(data);
      }}
      loading={loading}
      variant={variant ?? contained}
      {...params}
    >
      {title}
    </CustomButton>
  );
}

export default ActionNextStep;
