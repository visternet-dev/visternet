import CustomButton from "components/ui-component/custom/Button";

function ActionNextStep({ loading, title, formik, variant, mutate, cta, ...params }) {
  return (
    <CustomButton
      onClick={(data) => {
        cta?.onNextStep(data);
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
