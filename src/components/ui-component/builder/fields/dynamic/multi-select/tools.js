export const serializerValue = (data) => {
  return data.map((item) => {
    return item?.value;
  });
};

export const serializerFields = (data) => {
  return data.reduce((fields, obj) => {
    return [...fields, ...obj?.fields];
  }, []);
};

export const getOptionSelected = ({ options, value }) => {
  return (
    options.filter((option) => {
      return value?.includes(option?.value);
    }) ?? []
  );
};
