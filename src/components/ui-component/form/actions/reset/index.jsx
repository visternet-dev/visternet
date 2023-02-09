import CustomButton from "components/ui-component/custom/Button";

function ActionReset({ loading, title, formik, ...params }) {
  return (
    <CustomButton onClick={formik.handleReset} loading={loading} variant="outlined" {...params}>
      {title}
    </CustomButton>
  );
}

export default ActionReset;
