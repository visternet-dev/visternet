export const getOptionSelected = ({ options, value }) => {
  return options.find((option) => option?.value === value) ?? {};
};
