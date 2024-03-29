const mockMultiSelectField = ({ fields = [], id: _id = "", defaultValue = [] } = {}) => {
  const id = _id || Math.ceil(Math.random() * 100);

  return {
    id: "id-" + id,
    type: "multi-select",
    label: "label-" + id,
    placeholder: "place holder",
    defaultValue,
    col: { md: 4, sm: 6, xs: 12 },
    validationType: "array",
    validations: [
      {
        type: "required",
        params: ["this field is required"]
      },
      {
        type: "min",
        params: [2, "less than 2"]
      }
    ],
    options: [
      {
        label: "Lable 1",
        value: "ID 1",
        fields: [fields[0]] ?? []
      },
      {
        label: "Lable 2",
        value: "ID 2",
        fields: [fields[1]] ?? []
      },
      {
        label: "Lable 3",
        value: "ID 3",
        fields: [fields[2]] ?? []
      }
    ]
  };
};

export default mockMultiSelectField;
