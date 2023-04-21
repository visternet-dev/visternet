import CustomButton from "components/ui-component/custom/Button";

function ActionPrevStep({ loading, title, formik, variant, mutate, cta, ...params }) {
  return (
    <CustomButton
      onClick={(data) => {
        cta?.onPrevStep(data);
      }}
      loading={loading}
      {...params}
    >
      {title}
    </CustomButton>
  );
}

export default ActionPrevStep;
