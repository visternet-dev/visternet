import { Stack } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

import None from "components/ui-component/none";

import ActionsBuilder from "../actions";
import FieldsBuilder from "../fields";
import AccordionSection from "./accordion";
import CardSection from "./card";

const sections = {
  none: None,
  card: CardSection,
  accordion: AccordionSection
};

function SectionBuilder({ children, type, title, formik, setSchema, fields, actions, ...params }) {
  const Section = sections[type] ?? None;

  return (
    <Section title={title} {...params}>
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
    </Section>
  );
}

export default SectionBuilder;
