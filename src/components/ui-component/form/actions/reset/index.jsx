import CustomButton from "components/ui-component/HOC/Button";

function ActionReset({ loading, title, formik, ...params }) {
  return (
    <CustomButton onClick={formik.handleReset} loading={loading} {...params}>
      {title}
    </CustomButton>
  );
}

export default ActionReset;
