import CustomButton from "components/ui-component/custom/Button";

function ActionPrevStep({ loading, title, formik, variant, mutate, ...params }) {
  return (
    <CustomButton onClick={formik.handleSubmit} loading={loading} {...params}>
      {title}
    </CustomButton>
  );
}

export default ActionPrevStep;
