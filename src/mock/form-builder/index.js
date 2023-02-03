import mockAction from "./action";
import mockMultiSelectField from "./multi-select";
import mockSelectField from "./select";
import mockTextField from "./text";
import mockTextareaField from "./textarea";

const muckFormVuilder = {
  sections: [
    {
      type: "none",
      title: "",
      fields: [mockSelectField(), mockMultiSelectField(), mockTextField(), mockTextareaField()]
    }
  ],
  actions: [mockAction()]
};

export default muckFormVuilder;
