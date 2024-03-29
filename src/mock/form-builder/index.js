import mockAction from "./action";
import mockCheckboxField from "./checkbox";
import mockMultiSelectField from "./multi-select";
import mockSelectField from "./select";
import mockTextField from "./text";
import mockTextareaField from "./textarea";

const muckFormVuilder = {
  sections: [
    {
      type: "card",
      title: "Test",
      fields: [
        // mockSelectField({ fields: [mockSelectField()] }),
        // mockMultiSelectField(),
        mockCheckboxField({ fields: [mockSelectField(), mockSelectField()] }),
        // mockTextField(),
        // mockTextareaField()
      ]
    }
  ],
  actions: [
    mockAction(),
    mockAction({ type: "reset", title: "Reset" }),
    mockAction({ type: "next-step", title: " < Next Step" }),
    mockAction({ type: "prev-step", title: "Prev Step >" })
  ],
  api: "api/test",
  defaultBody: {},  
  method: "post"
};

export default muckFormVuilder;

/**
 * @name fields [field, ...]
 *    @name field one element of fields
 *    @property {String} id Mandatory*
 *    @property {String} type Mandatory* - text, textarea, checkbox, select, multi-select, radio, date
 *    @property {String} label Optional - default=""
 *    @property {String} placeholder Optional - default=""
 *    @property {String} defaultValue Optional - default=""
 *    @property {Array.<Object>} options (Based on Type Field) - default=[]
 *       @name options
 *       @property {String} lable
 *       @property {String} value
 *       @property {Object} fields optional - default=[]
 *    @property {Array.<Object>} col optional - default={xs:12, sm:12, md: 12}
 *    @property {String} validationType Optional - default="String" - options= string, number, date
 *    @property {Array.<Object>} validations Optional - default="String" - options= string, number, date
 */
