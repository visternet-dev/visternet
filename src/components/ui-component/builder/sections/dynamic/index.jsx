import None from "components/ui-component/none";

import AccordionSection from "./accordion";
import CardSection from "./card";
import GridSection from "./grid";

const sections = {
  none: None,
  card: CardSection,
  accordion: AccordionSection,
  grid: GridSection
};

function DynamicSection({ children, type, title, ...params }) {
  const Section = sections[type] ?? None;
  console.log("none?" , Section)

  return (
    <Section title={title} {...params}>
      {children}
    </Section>
  );
}

export default DynamicSection;
