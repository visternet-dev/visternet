import CustomAutocomplete from "components/ui-component/HOC/fields/autocomplete";
import CustomInput from "components/ui-component/HOC/fields/input";

function DynamicFieldSelect(props) {
  const { sx, options, label, id, disabled, required, placeholder, formik } = props;
  const { handleBlur, setFieldValue, values, errors, touched } = formik;
  const haveError = touched[id] && errors[id];

  return (
    <CustomAutocomplete
      id={id}
      sx={{ ...sx }}
      options={options}
      disabled={disabled}
      onBlur={handleBlur}
      value={values[id]}
      onChange={(event, value) => {
        setFieldValue(id, value ?? "");
      }}
      renderInput={(params) => (
        <CustomInput {...params} label={label} error={haveError} helperText={haveError ? errors[id] : null} required={required} placeholder={placeholder} />
      )}
    />
  );
}

export default DynamicFieldSelect;
