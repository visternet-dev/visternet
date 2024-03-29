const mockTextareaField = ({ fields = [], id: _id = "", defaultValue = "" } = {}) => {
  const id = _id || Math.ceil(Math.random() * 100);

  return {
    id: "id-" + id,
    type: "textarea",
    label: "label-" + id,
    placeholder: "place holder",
    defaultValue,
    col: { xs: 12 },
    validationType: "string",
    validations: [
      {
        type: "required",
        params: ["this field is required"]
      }
    ],
    options: [
      {
        label: "Lable 1",
        value: "ID 1",
        fields: fields[0] ?? []
      },
      {
        label: "Lable 2",
        value: "ID 2",
        fields: fields[1] ?? []
      },
      {
        label: "Lable 3",
        value: "ID 3",
        fields: fields[2] ?? []
      }
    ]
  };
};

export default mockTextareaField;
