import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

import ActionsBuilder from "../actions";
import FieldsBuilder from "../fields";
import DynamicSection from "./dynamic";

function SectionsBuilder({ sections, formik, setSchema }) {
  if (sections)
    return (
      <>
        {sections.map(({ type, title, fields, actions = [], ...params }, index) => (
          <DynamicSection title={title} type={type} key={index} {...params}>
            {/* Fields */}
            <Grid2 container xs={12}>
              <FieldsBuilder fields={fields} formik={formik} setSchema={setSchema} />
            </Grid2>

            {/* Actions */}
            <ActionsBuilder
              actions={actions}
              formik={formik}
              // TODO: Must Be handle
              // loading={isLoading}
            />
          </DynamicSection>
        ))}
      </>
    );

  return <></>;
}

export default SectionsBuilder;
