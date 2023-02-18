export const serializerFields = (data) => {
  let fields = [];

  for (const key in data) {
    fields = [...fields, ...data[key]?.fields];
  }

  return fields;
};
