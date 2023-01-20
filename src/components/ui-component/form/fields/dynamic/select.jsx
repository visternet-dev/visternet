import produce from "immer";

import CustomAutocomplete from "components/ui-component/HOC/fields/autocomplete";
import CustomInput from "components/ui-component/HOC/fields/input";

function DynamicFieldSelect(props) {
  const { sx, options, label, name, disabled, required, formik } = props;
  const { handleBlur, setFieldValue, values, errors, touched } = formik;
  const haveError = touched[name] && errors[name];

  return (
    <CustomAutocomplete
      name={name}
      id={name}
      sx={{ ...sx }}
      options={options}
      disabled={disabled}
      onBlur={handleBlur}
      value={values[name]}
      onChange={(event, value) => setFieldValue(name, value)}
      renderInput={(params) => (
        <CustomInput {...params} label={label} error={haveError} helperText={haveError ? errors[name] : null} required={required} />
      )}
    />
  );
}

export default DynamicFieldSelect;
