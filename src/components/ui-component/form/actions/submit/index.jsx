import CustomButton from "components/ui-component/HOC/Button";

function ActionSubmit({ loading, title, formik, ...params }) {
  return (
    <CustomButton onClick={formik.handleSubmit} loading={loading} variant="contained" {...params}>
      {title}
    </CustomButton>
  );
}

export default ActionSubmit;
