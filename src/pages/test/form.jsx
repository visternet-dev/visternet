import React from "react";

import FormBuilder from "components/ui-component/form/builder";

const muckFields = [
  {
    type: "select",
    label: "test",
    name: "selectName",
    options: ["1", "2" ,  "12321"],
    col: { md: 4, sm: 6, xs: 12 },
    defaultValue: "12321"
  },
  {
    type: "select",
    label: "test",
    name: "selectName2",
    options: [],
    col: { md: 4, sm: 6, xs: 12 },
    disabled: true
  }
];
function PageForm() {
  return (
    <div>
      <FormBuilder fields={muckFields} />
    </div>
  );
}

export default PageForm;
