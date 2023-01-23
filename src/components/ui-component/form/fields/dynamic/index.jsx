import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

import capitalize from "utils/string/capiltalize";

import DynamicFieldSelect from "./select";

const Fields = {
  Select: DynamicFieldSelect
};

function DynamicField(props) {
  const { options = {}, id, label = "", placeholder = "", col = {}, disabled = false, validations = [], sx = {}, type, formik } = props;
  const required = validations.some((validation) => validation.type === "required");
  const { xs = 12, sm = 12, md = 12 } = col;

  const Field = Fields?.[capitalize(type)];

  if (Field)
    return (
      <Grid2 xs={xs} sm={sm} md={md}>
        <Field sx={sx} options={options} label={label} id={id} formik={formik} disabled={disabled} required={required} placeholder={placeholder} />
      </Grid2>
    );

  // on Error
  return (
    <Grid2 xs={12} sx={{ color: "red" }}>
      This Field is not found!
    </Grid2>
  );
}

export default DynamicField;
