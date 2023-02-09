import None from "components/ui-component/none";

import AccordionSection from "./accordion";
import CardSection from "./card";

const sections = {
  none: None,
  card: CardSection,
  accordion: AccordionSection
};

function SectionBuilder({ children, type, title, ...params }) {
  const Section = sections[type] ?? None;

  return (
    <Section title={title} {...params}>
      {children}
    </Section>
  );
}

export default SectionBuilder;
