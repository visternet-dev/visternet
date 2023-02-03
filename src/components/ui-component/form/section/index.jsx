import None from "components/ui-component/none";

import CardSection from "./card";

const sections = {
  none: None,
  card: CardSection
};

function SectionBuilder({ children, type, title }) {
  const Section = sections[type] ?? None;

  return <Section title={title}>{children}</Section>;
}

export default SectionBuilder;
