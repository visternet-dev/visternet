import { useFormik } from "formik";


import FieldsBuilder from "../fields";
import DynamicSection from "./dynamic";

function SectionsBuilder({ sections, actions, formik, setSchema }) {
  if (!actions) {
    // State for handle schema
    const [schema, setSchema] = useState();

    // Handle Submit & Update
    const { mutate, isLoading } = useMutation((data) => {
      return axios[method](api, data);
    });

    // use formik for controll form
    const formik = useFormik({
      initialValues: {},
      validationSchema: Yup.object().shape(schema),
      onSubmit: (data) => {
        mutate(data);
      }
    });
  }

  if (sections)
    return (
      <>
        {sections.map(({ type, title, fields, ...params }, index) => (
          <DynamicSection title={title} type={type} key={index} {...params}>
            {/* Fields */}
            {/* <Grid2 container rowSpacing={2} xs={12}> */}
              <FieldsBuilder fields={fields} formik={formik} setSchema={setSchema} />
            {/* </Grid2> */}
          </DynamicSection>
        ))}
      </>
    );

  return <></>;
}

export default SectionsBuilder;
