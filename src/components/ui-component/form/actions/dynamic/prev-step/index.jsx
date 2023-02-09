import CustomButton from "components/ui-component/custom/Button";

function ActionPrevStep({ loading, title, formik, ...params }) {
  return (
    <CustomButton onClick={formik.handleSubmit} loading={loading} {...params}>
      {title}
    </CustomButton>
  );
}

export default ActionPrevStep;
