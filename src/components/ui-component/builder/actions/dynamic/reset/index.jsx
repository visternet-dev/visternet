import CustomButton from "components/ui-component/custom/Button";

function ActionReset({ loading, title, formik, variant, mutate, ...params }) {
  return (
    <CustomButton onClick={formik.handleReset} loading={loading} {...params}>
      {title}
    </CustomButton>
  );
}

export default ActionReset;
