import CustomButton from "components/ui-component/custom/Button";

function ActionPrevStep({ loading, title, formik, variant, ...params }) {
  return (
    <CustomButton onClick={formik.handleSubmit} loading={loading} variant={variant ?? null} {...params}>
      {title}
    </CustomButton>
  );
}

export default ActionPrevStep;
