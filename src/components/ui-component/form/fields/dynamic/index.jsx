import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

import DynamicFieldSelect from "./select";

const Fields = {
  Select: DynamicFieldSelect
};

function DynamicField(props) {
  const { sx, options, label, name, col = {}, disabled = false, required = false, formik } = props;
  const { xs = 12, sm = 12, md = 12 } = col;

  const Field = Fields.Select;

  return (
    <Grid2 xs={xs} sm={sm} md={md}>
      <Field sx={sx} options={options} label={label} name={name} formik={formik} disabled={disabled} required={required} />
    </Grid2>
  );
}

export default DynamicField;
