import CustomButton from "components/ui-component/custom/Button";

function ActionSubmit({ loading, title, formik, ...params }) {
  console.log("params submit ---", params);

  return (
    <CustomButton onClick={formik.handleSubmit} loading={loading} variant="contained" {...params}>
      {title}
    </CustomButton>
  );
}

export default ActionSubmit;
