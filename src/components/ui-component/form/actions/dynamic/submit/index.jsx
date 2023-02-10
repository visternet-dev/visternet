import _ from "lodash";

import CustomButton from "components/ui-component/custom/Button";

function ActionSubmit({ loading, title, formik, variant, mutate, api, ...params }) {
  return (
    <CustomButton
      onClick={() => {
        formik.handleSubmit();

        if (!_.isEmpty(formik.errors) && !_.isNil(api) && !_.isEmpty(api)) mutate({ data: formik.values, api });
      }}
      loading={loading}
      variant={variant ?? "contained"}
      {...params}
    >
      {title}
    </CustomButton>
  );
}

export default ActionSubmit;
